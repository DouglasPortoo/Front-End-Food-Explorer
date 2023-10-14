import { Plus, X } from "@phosphor-icons/react";

import { Container } from "./styles";

export function NoteItem({ isnew, value, onClick, ...rest }) {
  return (
    <Container isNew={isnew}>
      <input type="text" value={value} readOnly={!isnew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isnew ? "button-add" : "button-delete"}
      >
        {isnew ? <Plus /> : <X />}
      </button>
    </Container>
  );
}
