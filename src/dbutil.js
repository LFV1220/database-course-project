export function getUserRoutes(email, day) {
  fetch('http://localhost:3001/g')
    .then(response => {
      console.log(response.text());
      return response.text();
    })
    .then(data => {
      console.log(data);
    });
}

export function insertUser(email, password) {
  fetch('http://localhost:3001/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    });
}

export function insertClasses(day, email, building, order) {
  fetch('http://localhost:3001/classes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ day, email, building, order }),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    });
}

export function insertBuildings(building, latitude, longitude) {
  fetch('http://localhost:3001/building', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ building, latitude, longitude }),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    }
    );
}

export function insertFeedback(feedbackText) {
  fetch('http://localhost:3001/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ feedbackText }),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.log(error)
    })
}

export function deleteClasses(email) {
  fetch(`http://localhost:3001/classes/${email}`, {
    method: 'DELETE',
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      alert(data);
    });
}

export function deleteBuilding(prefix) {
  fetch(`http://localhost:3001/building/${prefix}`, {
    method: 'DELETE',
  })
    .then(response => {
      return response.text();
    })
    .catch(data => {
      alert(data);
    });
}
