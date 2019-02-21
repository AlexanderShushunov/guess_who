const MODIFIER_SEPARATOR = "--";

export const calcClassNames = name => modifiers => {
  const modifiersClassNames = Object.keys(modifiers)
    .filter(modifier => modifiers[modifier])
    .map(modifier => `${name}${MODIFIER_SEPARATOR}${modifier}`);
  return `${name} ${modifiersClassNames.join(" ")}`.trim();
};
