export default function toKebabCase(sentence) {
  const lowerCaseSentence = [...sentence]
    .map((letter) =>
      letter
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    )
    .join("")
    .trim()
    .replace(/\s/g, "-");

  return lowerCaseSentence;
}