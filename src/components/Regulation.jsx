import { sources } from "../constants/services";

// Lists regulatory statements with a link to the official page each one is
// based on. Hidden when there is nothing to show.
const Regulation = ({ title, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <>
      <h2 className="mt-12 text-primary font-bold text-[28px]">{title}</h2>
      <ul className="mt-4 list-disc pl-6 text-secondary text-[17px] leading-[30px]">
        {items.map((item) => {
          const source = sources[item.source];
          return (
            <li key={item.text} className="mb-3">
              {item.text}{" "}
              <a
                className="underline"
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
              </a>
              .
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-tertiary text-[15px]">
        Rules and standard editions change. We confirm the requirements that
        apply to your project at the start.
      </p>
    </>
  );
};

export default Regulation;
