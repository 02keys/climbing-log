body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

.container {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}

h1, h2 {
  text-align: center;
}

.category-box {
  position: relative;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.category-box.indoor {
  background: url('3e8e70c7-46cc-400a-8cd6-a4036fb9803f.png') center/cover no-repeat;
}

.category-box.outdoor {
  background: url('b43e6d63-d9c4-4e95-bd96-58d715a8af99.png') center/cover no-repeat;
}

.overlay {
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.subcategory-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.subcategory-buttons button {
  padding: 1rem;
  font-size: 1rem;
  border: none;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
}

.back-btn {
  margin-bottom: 1rem;
  background: transparent;
  border: none;
  font-size: 1rem;
  color: #3b82f6;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;
}

input, textarea, button {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

#climbList .entry {
  background: white;
  padding: 1rem;
  margin-bottom: 10px;
  border-left: 4px solid #3b82f6;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
