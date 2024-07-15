import { NavbarItem } from "@features/ui";
import GlobalStyles from "@styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <NavbarItem
        list="ArrowDirectionRight"
        icon="InterfaceAddCircle"
        title="Squad 1"
        type="menu"
        color="var(--gray-1100)"
      />
    </>
  );
};

export default App;
