$(document).ready(function(){

  /* ↓↓↓ table drag'n'drop ↓↓↓ */
  tableDragger(document.querySelector("#some-table"));
  /* ↑↑↑ /table drag'n'drop ↑↑↑ */

  /* ↓↓↓ table drag'n'drop + animation ("width":"0px") conflict "fix" ↓↓↓ */
  setInterval(function(){
    if ($(".some-table__btn").html() === "менше") {
      $("th").css({"width":"200px","padding-top":"5px"});
      $("td").css({"width":"200px","padding-top":"5px"});
    }
  }, 500);
  /* ↑↑↑ /table drag'n'drop + animation ("width":"0px") conflict "fix" ↑↑↑ */

  /* ↓↓↓ table-open button ↓↓↓ */
  $(".some-table__btn").click(function(){

    if ($(".some-table__btn").html() === "більше") {
      $(".some-table__btn").html("менше");
      $("th:nth-of-type(4)").css({"padding":"5px 10px"}).animate({"width":"200px"}, 500);
      $("td:nth-of-type(4)").css({"padding":"5px 10px"}).animate({"width":"200px"}, 500);
      $("th:nth-of-type(5)").css({"padding":"5px 10px"}).animate({"width":"200px"}, 500);
      $("td:nth-of-type(5)").css({"padding":"5px 10px"}).animate({"width":"200px"}, 500);
      return;
    };
    if ($(".some-table__btn").html() === "менше") {
      $(".some-table__btn").html("більше");
      $("th:nth-of-type(4)").animate({"width":"0px","padding":"5px 0px"}, 500);
      $("td:nth-of-type(4)").animate({"width":"0px","padding":"5px 0px"}, 500);
      $("th:nth-of-type(5)").animate({"width":"0px","padding":"5px 0px"}, 500);
      $("td:nth-of-type(5)").animate({"width":"0px","padding":"5px 0px"}, 500);
    };

  });
  /* ↑↑↑ /table-open button ↑↑↑ */

  /* ↓↓↓ sort buttons ↓↓↓ */
  $(".some-table__sort-btn").click(function(){

    //var numberOfColumn = $(this).attr("data-value"); // don't work correctly after drag'n'drop
    var arrOfSortBtn = $(".some-table__sort-btn");
    for (var i = 0; i < arrOfSortBtn.length; i++) {
      if (arrOfSortBtn[i] == this) {
        var numberOfColumn = i;
      };
      // arrow animation reset
      $(arrOfSortBtn[i]).css({"transition":".5s","transform":"rotate(0deg)"});
    }

    if (!this.isSorted) {
      this.isSorted = true;
      this.isUpToDownSorted = true;

      // Up-To-Down-sort function
      sortColumns(numberOfColumn, "Up-To-Down");

      return;

    } else {

      if (this.isUpToDownSorted) {
        this.isUpToDownSorted = false;
        this.isDownToUpSorted = true;
        $(this).css({"transition":".5s","transform":"rotate(-180deg)"});

        // Down-To-Up-sort function
        sortColumns(numberOfColumn, "Down-To-Up");

        return;

      };

      if (this.isDownToUpSorted) {
        this.isDownToUpSorted = false;
        this.isUpToDownSorted = true;
        $(this).css({"transition":".5s","transform":"rotate(0deg)"});
        
        // Up-To-Down-sort function
        sortColumns(numberOfColumn, "Up-To-Down");

        return;
      };

    };

    function sortColumns(what, how) {

      var table = $("#some-table");
      var tbody = $(".some-table__tbody");
      tbody.remove();

      // get tr-array
      var rows = [];
      for (var i = 0; i < tbody.children().length; i++) {
        var elem = tbody[0].children[i];
        rows.push({
          value: elem.children[what].innerHTML,
          elem: elem
        });
      }
      
      //sort tr-array
      if (isNaN(rows[0].value)) {
        // sort as string
        rows.sort(function(a, b) {
          var collator = new Intl.Collator();
          if (how == "Up-To-Down") {
            return collator.compare(a.value, b.value);
          };
          if (how == "Down-To-Up") {
            return collator.compare(b.value, a.value);
          };
        });
      } else {
        // sort as number
        rows.sort(function(a, b) {
          if (how == "Up-To-Down") {
            return a.value - b.value;
          };
          if (how == "Down-To-Up") {
            return b.value - a.value;
          };
        });
      };

      // build new tr-array
      for (var i = 0; i < rows.length; i++) {
        tbody.append(rows[i].elem);
      };

      table.append(tbody);
    };

  });
  /* ↑↑↑ /sort buttons ↑↑↑ */

}); 