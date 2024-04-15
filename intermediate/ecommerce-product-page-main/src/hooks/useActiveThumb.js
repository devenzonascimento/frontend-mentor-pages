const useActiveThumb = () => {
  const addActiveStyles = (thumbElement) => {
    removeAllActiveStyles();
    thumbElement.parentNode.classList.add("selected-thumb");
  };

  const removeAllActiveStyles = () => {
    document.querySelectorAll(`.thumbnail`).forEach((thumb) => {
      if (thumb.classList.contains("selected-thumb")) {
        thumb.classList.remove("selected-thumb");
      }
    });
  };

  return { addActiveStyles };
};

export default useActiveThumb;
