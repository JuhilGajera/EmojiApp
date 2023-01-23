function emojiSearch() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  const addEmoji = document.getElementById("addEmoji").value;
  const tags = [];
  emojiList.map((ele) => {
    if (ele.tags.includes(addEmoji)) {
      tags.push(ele);
      list.innerHTML += `<div class="tablerow">
                <div class="emojiIcon">${ele.emoji}</div>
                <div class="emojiTags">${ele.aliases}</div>
                <div class="emojiname">${ele.description}</div>
            </div>`;
    }
  });
}
