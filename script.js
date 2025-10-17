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

    function createTable() {
      const rn = promptInteger("Input number of rows");
      if (rn === null) {
        return;  
      }
      const cn = promptInteger("Input number of columns");
      if (cn === null) {
        return;
      }

      const table = document.getElementById('myTable');
     
      table.innerHTML = "";

      for (let i = 0; i < rn; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cn; j++) {
          if (i === 0) {
            const th = document.createElement('th');
            th.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(th);
          } else {
            const td = document.createElement('td');
            td.textContent = `Row-${i} Column-${j}`;
            tr.appendChild(td);
          }
        }
        table.appendChild(tr);
      }
    }