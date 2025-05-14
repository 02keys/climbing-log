body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f7f7f7;
}

.container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

h1, h2 {
  text-align: center;
}

form {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;
}

input, select, textarea, button {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}

#climbList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.climb-entry {
  background: white;
  padding: 1rem;
  border-left: 6px solid #4CAF50;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  position: relative;
}

.climb-entry h3 {
  margin: 0;
}

.climb-entry .type {
  font-size: 0.9rem;
  color: #666;
}

.delete-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
