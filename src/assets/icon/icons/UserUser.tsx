export default function (color: string) {
  return (
    <>
      <ellipse
        cx="12"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>
  );
}
