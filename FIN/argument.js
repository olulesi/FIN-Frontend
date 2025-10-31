
    // Pronouns
    const pronouns = ["Mo", "Ìwọ", "Ó", "Àwa", "Wọ́n"];
    const negPronouns = ["Mi ò", "Ò", "Kò", "A", "Wọ́n"]; // 👈 Negative pronouns

    // Verbs and their conjugations
    const verbs = {
      "jẹun": { 
        affirmative: ["Mo ti jẹun", "Ìwọ ti jẹun", "Ó ti jẹun", "Àwa ti jẹun", "Wọ́n ti jẹun"],
        negative: ["Mi ò tíì jẹun", "Ìwọ ò tíì jẹun", "Kò tíì jẹun", "A ò tíì jẹun", "Wọ́n ò tíì jẹun"]
      },
      "lọ": { 
        affirmative: ["Mo ti lọ", "Ìwọ ti lọ", "Ó ti lọ", "Àwa ti lọ", "Wọ́n ti lọ"],
        negative: ["Mi ò tíì lọ", "Ìwọ ò tíì lọ", "Kò tíì lọ", "A ò tíì lọ", "Wọ́n ò tíì lọ"]
      },
      "dé": { 
        affirmative: ["Mo ti dé", "Ìwọ ti dé", "Ó ti dé", "Àwa ti dé", "Wọ́n ti dé"],
        negative: ["Mi ò tíì dé", "Ìwọ ò tíì dé", "Kò tíì dé", "A ò tíì dé", "Wọ́n ò tíì dé"]
      },
      "sùn": { 
        affirmative: ["Mo ti sùn", "Ìwọ ti sùn", "Ó ti sùn", "Àwa ti sùn", "Wọ́n ti sùn"],
        negative: ["Mi ò tíì sùn", "Ìwọ ò tíì sùn", "Kò tíì sùn", "A ò tíì sùn", "Wọ́n ò tíì sùn"]
      },
      "kà": { 
        affirmative: ["Mo ti kà", "Ìwọ ti kà", "Ó ti kà", "Àwa ti kà", "Wọ́n ti kà"],
        negative: ["Mi ò tíì kà", "Ìwọ ò tíì kà", "Kò tíì kà", "A ò tíì kà", "Wọ́n ò tíì kà"]
      }
    };

    function createTable(title, dataType, verbKey) {
      const table = document.createElement("table");
     

      // Table header
      const headerRow = document.createElement("tr");
      ["Pronoun", "Tense", "Verb", "Yorùbá Sentence", "Audio 🔊"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Table rows
      (dataType === "affirmative" ? pronouns : negPronouns).forEach((pronoun, i) => {
        const row = document.createElement("tr");
        const cells = [
          pronoun,
          "Tí", // ✅ tense column
          verbKey,
          verbs[verbKey][dataType][i],
          "🔊"
        ];
        cells.forEach(text => {
          const td = document.createElement("td");
          td.textContent = text;
          row.appendChild(td);
        });
        table.appendChild(row);
      });

      return table;
    }

    function updateTables(verbKey) {
      const container = document.getElementById("tables");
      container.innerHTML = "";

      const affirmativeTable = createTable("Positive (Àmọ̀ràn Rẹ́tọ́)", "affirmative", verbKey);
      const negativeTable = createTable("Negative (Àmọ̀ràn Kò)", "negative", verbKey);

      container.appendChild(affirmativeTable);
      container.appendChild(negativeTable);
    }

    // Default verb when page loads
    updateTables("jẹun");

