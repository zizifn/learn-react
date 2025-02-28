export function Tabs({ children, buttons, ButtonsContainer }) {
// const ButtonContainer = ButtonsContainer || 'ul';
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
