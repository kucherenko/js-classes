export function SmilesFilter($sce) {
  return (input) => $sce.trustAsHtml(
    input.replace(/:\)/g,
      '<img src="https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/emoticon_smile.png" width="50"/>'
    )
  );
}
