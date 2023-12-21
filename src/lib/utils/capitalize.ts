export default function capitalize(str: string) {
  return str.replaceAll(/(^\w)|(\s\w)/g, (match) => match.toUpperCase())
}
