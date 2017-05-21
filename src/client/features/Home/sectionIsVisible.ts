
export default function sectionIsVisible(id: string): boolean {
  const windowHeight = window ? window.innerHeight : 1000;
  const node = document.getElementById(id);
  return node.getBoundingClientRect().top < windowHeight / 2;
}
