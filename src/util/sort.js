export const onSort = async (typeSort, files) => {
    const filesToSort = files;

    if(typeSort === "name"){
      await filesToSort.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
  
        // names must be equal
        return 0;
      });

    }else if(typeSort === "date"){
      await filesToSort
      .sort((em1, em2) => {
        return new Date(em1.upload_at) - new Date(em2.upload_at);
      });
    }
    return filesToSort
  };
