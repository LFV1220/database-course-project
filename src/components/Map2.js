import React from "react";
import { fromLonLat, transform } from "ol/proj";
import { Point } from "ol/geom";
import { Polyline } from "ol/format";
import { RMap, ROSM, RLayerVector, RFeature } from "rlayers";
import { RStyle, RCircle, RFill, RStroke, RText } from "rlayers/style";
import { deleteBuilding, insertBuildings } from "../dbutil";

const fillAddress = point => {
	if (point === null)
		return Promise.resolve("");
	const coordsWGS = transform(point.getCoordinates(), "EPSG:3857", "EPSG:4326");
	const URL = `https://nominatim.openstreetmap.org/reverse?format=json&lon=${coordsWGS[0]}&lat=${coordsWGS[1]}`;

	return fetch(URL)
		.then(r => r.json())
		.then(data => data.display_name)
		.catch(e => e.message);
}

const polyReader = new Polyline();
const parseRoute = routes => {
	if (routes.length > 0) {
		const f = polyReader.readFeature(routes[0].geometry);
		f.getGeometry().transform("EPSG:4326", "EPSG:3857");
		return f.getGeometry();
	}
}

const buildRoute = (start, finish) => {
	if (start === null || finish === null)
		return Promise.resolve(null);

	const startCoords = transform(
		start.getCoordinates(),
		"EPSG:3857",
		"EPSG:4326"
	);

	const finishCoords = transform(
		finish.getCoordinates(),
		"EPSG:3857",
		"EPSG:4326"
	);

	const URL =
		"https://router.project-osrm.org/route/v1/driving/" +
		`${startCoords[0]},${startCoords[1]};${finishCoords[0]},${finishCoords[1]}`;

	return fetch(URL)
		.then(r => r.json())
		.then(data => parseRoute(data.routes));
}

export default function Map2({ buildingsList }) {

	const [start, setStart] = React.useState(null);
	const [finish, setFinish] = React.useState(null);
	const [step, setStep] = React.useState(0);
	const [startAddress, setStartAddress] = React.useState("");
	const [finishAddress, setFinishAddress] = React.useState("");
	const [route, setRoute] = React.useState(null);

	const buildings = {
		LIB: [-82.412220, 28.059588],
		BSN: [-82.409976, 28.058358],
		CPR: [-82.410845, 28.059827],
		HMS: [-82.409271, 28.060856],
		CWY: [-82.408220, 28.061356],
		SOC: [-82.409420, 28.061439],
		ULH: [-82.409773, 28.060443],
		EDU: [-82.410609, 28.060767],
		BEH: [-82.410090, 28.061999],
		MSC: [-82.413583, 28.063923],
		ENG: [-82.415900, 28.059454],
		ENB: [-82.415484, 28.058733],
		MDT: [-82.419598, 28.068428],
		MHC: [-82.422864, 28.068118],
		JPH: [-82.418428, 28.059811],
		SHR: [-82.422259, 28.061852],
		PUB: [-82.411957, 28.068428],
		ISA: [-82.414108, 28.061403],
		ALN: [-82.413240, 28.061449],
		FAH: [-82.416686, 28.063077],
		MRC: [-82.419555, 28.065334]
	};

  React.useEffect(() => {
    // Get buildings from database then store them in a local variable

    // Use Object.keys(buildings).forEach(() => {}) to iterate through buildings object in this file https://masteringjs.io/tutorials/fundamentals/foreach-object

    // For each key in the buildings object, check if that key exists in the object coming from the database
  }, [])

	React.useEffect(() => {
		Object.keys(buildings).forEach(key => {
			// we need delete query and insert query
			insertBuildings(key, buildings[key][1], buildings[key][0]);
			// console.log(key, buildings[key]);
		})
	}, []);
	// On start change
	React.useEffect(() => {
		fillAddress(start).then(address => setStartAddress(address));
	}, [start]);

	// On finish change
	React.useEffect(() => {
		fillAddress(finish).then(address => setFinishAddress(address));
	}, [finish]);

	// When either one changes
	React.useEffect(() => {
		buildRoute(start, finish).then(line => setRoute(line));
	}, [start, finish]);

	return (
		<div>
			<RMap
				className="map"
				initial={{ center: fromLonLat([-82.414863, 28.061899]), zoom: 16 }}
				onClick={e => {
					const coords = e.map.getCoordinateFromPixel(e.pixel);

					if (step === 0) {
						setFinish(null);
						setStart(new Point(coords));
						setStep(1);
					} else {
						setFinish(new Point(coords));
						setStep(0);
					}
				}}
			>
				<ROSM />
				<RLayerVector>
					<RStyle>
						<RCircle radius={6}>
							<RFill color="blue" />
						</RCircle>
					</RStyle>
					<RFeature key={0} geometry={start} />
					<RFeature key={1} geometry={finish} />
					<RFeature key={2} geometry={route}>
						<RStyle>
							<RStroke width={3} color="darkgreen" />
						</RStyle>
					</RFeature>
				</RLayerVector>
				<RLayerVector>
					<RStyle>
						<RCircle radius={15}>
							<RFill color='black' />
						</RCircle>
					</RStyle>
					{Object.keys(buildings).map((BuildStr) => {
						const coords = fromLonLat(buildings[BuildStr])
						return (<RFeature key={BuildStr} geometry={new Point(coords)} />)

					})}
				</RLayerVector>

				{/* Building codes */}
				{Object.keys(buildings).map((BuildStr) => {
					const coords = fromLonLat(buildings[BuildStr])
					return (
						<RLayerVector key={BuildStr}>
							<RStyle>
								<RText text={BuildStr}>
									<RFill color='white' />
									<RStroke color="rgba(0, 0, 0, 0.6)" width={6} />
								</RText>
							</RStyle>
							<RFeature geometry={new Point(coords)} properties={BuildStr} />
						</RLayerVector>
					)

				})}

			</RMap>
		</div>
	);
}