$(document).ready(function () {
  $("#formOne").submit(function (event) {

    event.preventDefault();
    let listItems = $("#favorites li");
    if (listItems) {
      listItems.each(function (item) {
        $(this).remove();
      });
    };
    let favorites = ["cookie dough", "vanilla", "chocolate", "coffee", "mint chocolate chip"];
    const userFavorite = $("#user-favorite").val();
    favorites.pop(favorites.length - 1);
    favorites.push(userFavorite);
    favorites.forEach(function (favorite) {
      console.log(favorite);
      $("#favorites").append(`<li>${favorite}</li>`);
    });

  });
});