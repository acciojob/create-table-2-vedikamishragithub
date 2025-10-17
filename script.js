function createTable() {
  const rn = promptInteger("Input number of rows");
  if (rn === null || rn <= 0) {
    alert("Please enter a valid number of rows greater than 0.");
    return;  
  }
  const cn = promptInteger("Input number of columns");
  if (cn === null || cn <= 0) {
    alert("Please enter a valid number of columns greater than 0.");
    return;
  }

  const table = document.getElementById('myTable');
  table.innerHTML = "";

  for (let i = 0; i < rn; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cn; j++) {
      const cell = i === 0 ? document.createElement('th') : document.createElement('td');
      cell.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
}

function promptInteger(message) {
      while (true) {
        let input = prompt(message);
        if (input === null) {          
          return null;
        }
        input = input.trim();
        if (input === "") {
          alert("Input cannot be empty. Please enter a valid integer.");
          continue;
        }
        let num = Number(input);
        if (!Number.isNaN(num) && Number.isInteger(num) && num > 0) {
          return num;
        }
        alert("Please enter a valid positive integer.");
        
      }
    }