// Example:
var ourStorage =
{
  "desk":
  {

    "drawer": "stapler"

  },

  "cabinet":
  {

    "top drawer":
    {

      "folder1": "a folder",
      "folder2": "secrets"

    },

    "bottom drawer": "soda"

  }

};

ourStorage.cabinet["top drawer"].folder2; // "secrets"
outStorage.desk.drawer; // "stapler"

// Solution:
var myStorage =
{
  "car":
  {

    "inside":
    {

      "glove box": "maps",
      "passenger seat": "crumbs"

    },

    "outside":
    {

      "trunk": "jack"

    }

  }

};

var gloveBoxContents = myStorage.car.inside["glove box"];
