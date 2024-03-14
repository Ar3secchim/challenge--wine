import { InputCheckbox, LabelInput, SpanContainer, ListItem } from "./styles";

interface RangesList {
  key: number;
  min: number;
  max: number;
  label: string;
  OnChahge : 
}

export function FilterList(props: RangesList) {
  return (
    <ListItem>
      <LabelInput htmlFor={`check-${props.min}`}>
        <InputCheckbox
          type="checkbox"
          id={`check-${props.min}`}
          onChange={OnChange}
        />
        <SpanContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            width="16"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </SpanContainer>
      </LabelInput>
      <LabelInput htmlFor={`check-${props.min}`}>{props.label}</LabelInput>
    </ListItem>
  );
}
