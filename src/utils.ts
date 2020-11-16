/**
 * 动态插入DOM,并且指定id
 * @param id id名称
 */
export const judgeDOMExitAndCreateDOM = (id: string) => {
  let domWrapper = document.querySelector(`#${id}`);
  if (domWrapper === null) {
    domWrapper = document.createElement("div");
    domWrapper.setAttribute("id", id);
    document.body.append(domWrapper);
  }
  return domWrapper
}
