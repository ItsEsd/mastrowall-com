function myFunction() {
    hideBtn.style.display = "none";
    hideImg.style.display = "none";
    bdy.style.display = "block";
  }
  $(document).ready(function() {
    var $pagination = $("#pagination"),
      totalRecords = 0,
      records = [],
      recPerPage = 0,
      nextPageToken = "",
      totalPages = 0;
    var API_KEY = "";
    var search = "";
    var duration = "any";
    var order = "relevance";
    var beforedate = new Date().toISOString();
    var afterdate = new Date().toISOString();
    var maxResults = 6;
    $("#duration").change(function() {
      duration = $(this).children("option:selected").val();
    });
    $("#order").change(function() {
      order = $(this).children("option:selected").val();
    });
    $("#myForm").submit(function(e) {
      e.preventDefault();
      search = $("#search").val();
      API_KEY = "AIzaSyAp5fxkXnZhHy_nQxGzP4tGfxBL2x8XZfY";
      var url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY} &part=snippet&q=${search}&maxResults=${maxResults}&publishedAfter=${afterdate}&publishedBefore=${beforedate}&order=${order}&videoDuration=${duration}&type=video`;
      $.ajax({
        method: "GET",
        url: url,
        beforeSend: function() {
          $("#btn").attr("disabled", true);
          $("#results").empty();
        },
        success: function(data) {
          $("#btn").attr("disabled", false);
          displayVideos(data);
        },
      });
    });

    function apply_pagination() {
      $pagination.twbsPagination({
        totalPages: totalPages,
        visiblePages: 6,
        onPageClick: function(event, page) {
          displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
          endRec = displayRecordsIndex + recPerPage;
          displayRecords = records.slice(displayRecordsIndex, endRec);
          generateRecords(recPerPage, nextPageToken);
        },
      });
    }
    $("#search").change(function() {
      search = $("#search").val();
    });

    function generateRecords(recPerPage, nextPageToken) {
      var url2 = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${search}&maxResults=${maxResults}&pageToken=${nextPageToken}&publishedBefore=${beforedate}&publishedAfter=${afterdate}&order=${order}&videoDuration=${duration}&type=video`;
      $.ajax({
        method: "GET",
        url: url2,
        beforeSend: function() {
          $("#btn").attr("disabled", true);
          $("#results").empty();
        },
        success: function(data) {
          $("#btn").attr("disabled", false);
          displayVideos(data);
        },
      });
    }

    function displayVideos(data) {
      recPerPage = data.pageInfo.resultsPerPage;
      nextPageToken = data.nextPageToken;
      totalRecords = data.pageInfo.totalResults;
      totalPages = Math.ceil(totalRecords / recPerPage);
      apply_pagination();
      $("#search").val("");
      var videoData = "";
      $("#pager").show();
      $("#results").show();
      $("#table").show();
      $("#bdy").hide();
      $("#back").show();
      data.items.forEach((item) => {
        videoData = `<div class="yrbrslt embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe></div> <p> <a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}"> ${item.snippet.title}</a> <a target="_blank" href="https://www.youtube.com/channel/${item.snippet.channelId}">${item.snippet.channelTitle}</a></p><hr style="border-width:2px; border-color:#4d4d4d;">`;
        $("#results").append(videoData);
      });
    }
  });

  ! function(a, b, c, d) {
    "use strict";
    var e = a.fn.twbsPagination,
      f = function(b, c) {
        if (this.$element = a(b), this.options = a.extend({}, a.fn.twbsPagination.defaults, c), this.options.startPage < 1 || this.options.startPage > this.options.totalPages) throw new Error("Start page option is incorrect");
        if (this.options.totalPages = parseInt(this.options.totalPages), isNaN(this.options.totalPages)) throw new Error("Total pages option is not correct!");
        if (this.options.visiblePages = parseInt(this.options.visiblePages), isNaN(this.options.visiblePages)) throw new Error("Visible pages option is not correct!");
        if (this.options.onPageClick instanceof Function && this.$element.first().on("page", this.options.onPageClick), this.options.hideOnlyOnePage && 1 == this.options.totalPages) return this.$element.trigger("page", 1), this;
        this.options.totalPages < this.options.visiblePages && (this.options.visiblePages = this.options.totalPages), this.options.href && (this.options.startPage = this.getPageFromQueryString(), this.options.startPage || (this.options.startPage = 1));
        var d = "function" == typeof this.$element.prop ? this.$element.prop("tagName") : this.$element.attr("tagName");
        return "UL" === d ? this.$listContainer = this.$element : this.$listContainer = a("<ul></ul>"), this.$listContainer.addClass(this.options.paginationClass), "UL" !== d && this.$element.append(this.$listContainer), this.options.initiateStartPageClick ? this.show(this.options.startPage) : (this.currentPage = this.options.startPage, this.render(this.getPages(this.options.startPage)), this.setupEvents()), this
      };
    f.prototype = {
      constructor: f,
      destroy: function() {
        return this.$element.empty(), this.$element.removeData("twbs-pagination"), this.$element.off("page"), this
      },
      show: function(a) {
        if (a < 1 || a > this.options.totalPages) throw new Error("Page is incorrect.");
        return this.currentPage = a, this.render(this.getPages(a)), this.setupEvents(), this.$element.trigger("page", a), this
      },
      enable: function() {
        this.show(this.currentPage)
      },
      disable: function() {
        var b = this;
        this.$listContainer.off("click").on("click", "li", function(a) {
          a.preventDefault()
        }), this.$listContainer.children().each(function() {
          var c = a(this);
          c.hasClass(b.options.activeClass) || a(this).addClass(b.options.disabledClass)
        })
      },
      buildListItems: function(a) {
        var b = [];
        if (this.options.first && b.push(this.buildItem("first", 1)), this.options.prev) {
          var c = a.currentPage > 1 ? a.currentPage - 1 : this.options.loop ? this.options.totalPages : 1;
          b.push(this.buildItem("prev", c))
        }
        for (var d = 0; d < a.numeric.length; d++) b.push(this.buildItem("page", a.numeric[d]));
        if (this.options.next) {
          var e = a.currentPage < this.options.totalPages ? a.currentPage + 1 : this.options.loop ? 1 : this.options.totalPages;
          b.push(this.buildItem("next", e))
        }
        return this.options.last && b.push(this.buildItem("last", this.options.totalPages)), b
      },
      buildItem: function(b, c) {
        var d = a("<li></li>"),
          e = a("<a></a>"),
          f = this.options[b] ? this.makeText(this.options[b], c) : c;
        return d.addClass(this.options[b + "Class"]), d.data("page", c), d.data("page-type", b), d.append(e.attr("href", this.makeHref(c)).addClass(this.options.anchorClass).html(f)), d
      },
      getPages: function(a) {
        var b = [],
          c = Math.floor(this.options.visiblePages / 2),
          d = a - c + 1 - this.options.visiblePages % 2,
          e = a + c;
        d <= 0 && (d = 1, e = this.options.visiblePages), e > this.options.totalPages && (d = this.options.totalPages - this.options.visiblePages + 1, e = this.options.totalPages);
        for (var f = d; f <= e;) b.push(f), f++;
        return {
          currentPage: a,
          numeric: b
        }
      },
      render: function(b) {
        var c = this;
        this.$listContainer.children().remove();
        var d = this.buildListItems(b);
        a.each(d, function(a, b) {
          c.$listContainer.append(b)
        }), this.$listContainer.children().each(function() {
          var d = a(this),
            e = d.data("page-type");
          switch (e) {
            case "page":
              d.data("page") === b.currentPage && d.addClass(c.options.activeClass);
              break;
            case "prev":
              d.toggleClass(c.options.disabledClass, !c.options.loop && 1 === b.currentPage);
              break;
            case "next":
              d.toggleClass(c.options.disabledClass, !c.options.loop && b.currentPage === c.options.totalPages)
          }
        })
      },
      setupEvents: function() {
        var b = this;
        this.$listContainer.off("click").on("click", "li", function(c) {
          var d = a(this);
          return !d.hasClass(b.options.disabledClass) && !d.hasClass(b.options.activeClass) && (!b.options.href && c.preventDefault(), void b.show(parseInt(d.data("page"))))
        })
      },
      makeHref: function(a) {
        return this.options.href ? this.generateQueryString(a) : "#"
      },
      makeText: function(a, b) {
        return a.replace(this.options.pageVariable, b).replace(this.options.totalPagesVariable, this.options.totalPages)
      },
      getPageFromQueryString: function(a) {
        var b = this.getSearchString(a),
          c = new RegExp(this.options.pageVariable + "(=([^&#]*)|&|#|$)"),
          d = c.exec(b);
        return d && d[2] ? (d = decodeURIComponent(d[2]), d = parseInt(d), isNaN(d) ? null : d) : null
      },
      generateQueryString: function(a, b) {
        var c = this.getSearchString(b),
          d = new RegExp(this.options.pageVariable + "=*[^&#]*");
        return c ? "?" + c.replace(d, this.options.pageVariable + "=" + a) : ""
      },
      getSearchString: function(a) {
        var c = a || b.location.search;
        return "" === c ? null : (0 === c.indexOf("?") && (c = c.substr(1)), c)
      },
      getCurrentPage: function() {
        return this.currentPage
      }
    }, a.fn.twbsPagination = function(b) {
      var c, e = Array.prototype.slice.call(arguments, 1),
        g = a(this),
        h = g.data("twbs-pagination"),
        i = "object" == typeof b ? b : {};
      return h || g.data("twbs-pagination", h = new f(this, i)), "string" == typeof b && (c = h[b].apply(h, e)), c === d ? g : c
    }, a.fn.twbsPagination.defaults = {
      totalPages: 1,
      startPage: 1,
      visiblePages: 5,
      initiateStartPageClick: !0,
      hideOnlyOnePage: !1,
      href: !1,
      pageVariable: "{{page}}",
      totalPagesVariable: "{{total_pages}}",
      page: null,
      prev: "<<",
      next: ">>",
      loop: !1,
      onPageClick: null,
      paginationClass: "pagination",
      nextClass: "page-item next",
      prevClass: "page-item prev",
      firstClass: "page-item first",
      pageClass: "page-item",
      activeClass: "active",
      disabledClass: "disabled",
      anchorClass: "page-link"
    }, a.fn.twbsPagination.Constructor = f, a.fn.twbsPagination.noConflict = function() {
      return a.fn.twbsPagination = e, this
    }, a.fn.twbsPagination.version = "1.4.1"
  }(window.jQuery, window, document);


  function goto() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  $("#search_youtube").click(function(){
    $("#youtb").toggle(); $("#gcustom").hide();
  })
  $("#search_gcustom").click(function(){
    $("#gcustom").toggle();  $("#youtb").hide();
  })
  