export function random() {
  const colors = [
    {
      primary: "bg-blue-500",
      light: "bg-blue-500/20",
      text: "text-blue-500",
    },
    {
      primary: "bg-purple-500",
      light: "bg-purple-500/20",
      text: "text-purple-500",
    },
    {
      primary: "bg-violet-500",
      light: "bg-violet-500/20",
      text: "text-violet-500",
    },
    {
      primary: "bg-sky-500",
      light: "bg-sky-500/20",
      text: "text-sky-500",
    },
    {
      primary: "bg-teal-500",
      light: "bg-teal-500/20",
      text: "text-teal-500",
    },
    {
      primary: "bg-orange-500",
      light: "bg-orange-500/20",
      text: "text-orange-500",
    },
    {
      primary: "bg-green-500",
      light: "bg-green-500/20",
      text: "text-green-500",
    },
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}
