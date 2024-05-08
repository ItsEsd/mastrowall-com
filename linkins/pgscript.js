"use strict";
const url2 =
  "https://script.google.com/macros/s/AKfycby7WMOvKX38co6FPL3RWMYq7YZvzlqA6zLAx6u3xFIJeSnP4W-HJZqOsF38GD1ztzlFUA/exec?action=read";
$.getJSON(url2, function (json) {
  var jsonData = json;
  console.log(jsonData);

  var currentPage = 1;
  var itemsPerPage = 12;
  var pagesToShow = 10;
  function paginate(jsonObj, pageNumber, pageSize) {
    var startIndex = (pageNumber - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    return jsonObj.records.slice(startIndex, endIndex);
  }

  function renderData(data) {
    var dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = "";
    data.forEach(function (item) {
      var listItem = document.createElement("div");
      listItem.textContent =
        "Title: " + item.NotesTitle + ", Time: " + item.Time_stamp;
      dataContainer.appendChild(listItem);
    });
  }

  function renderPaginationButtons(totalPages) {
    var paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";

    // Previous Button
    var prevBtn = document.createElement("button");
    prevBtn.textContent = "Previous";
    prevBtn.classList.add("pagination-btn");
    prevBtn.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        renderData(paginate(jsonData, currentPage, itemsPerPage));
        renderPaginationButtons(totalPages);
      }
    });
    paginationContainer.appendChild(prevBtn);

    // Page Buttons
    var startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    var endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    for (var i = startPage; i <= endPage; i++) {
      var btn = document.createElement("button");
      btn.textContent = i;
      btn.classList.add("pagination-btn");
      if (i === currentPage) {
        btn.classList.add("active");
      }
      btn.dataset.page = i;
      btn.addEventListener("click", function () {
        currentPage = parseInt(this.dataset.page);
        renderData(paginate(jsonData, currentPage, itemsPerPage));
        renderPaginationButtons(totalPages);
      });
      paginationContainer.appendChild(btn);
    }

    // Next Button
    var nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.classList.add("pagination-btn");
    nextBtn.addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        renderData(paginate(jsonData, currentPage, itemsPerPage));
        renderPaginationButtons(totalPages);
      }
    });
    paginationContainer.appendChild(nextBtn);
  }
  // Initial render
  var totalItems = jsonData.records.length;
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var slicedItems = paginate(jsonData, currentPage, itemsPerPage);
  renderData(slicedItems);
  renderPaginationButtons(totalPages);
});
