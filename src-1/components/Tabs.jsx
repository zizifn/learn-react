export function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
// const ButtonContainer = ButtonsContainer || 'ul';
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
