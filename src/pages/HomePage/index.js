import React, { Fragment, useContext } from "react";
import StartingPageContent from "../../components/StartingPage/StartingPageContent";
import AuthContext from "../../components/store/auth-context";
import MyModal from "../../components/MyModal/MyModal";

const HomePage = () => {
  const nameCtx = useContext(AuthContext);
  const uName = nameCtx.uName;

  const modalCtx = useContext(AuthContext);
  const modSta = modalCtx.modStatus;
  const showMod = modalCtx.onShowModal;
  const hideMod = modalCtx.onHideModal;

  const welcomeMsg = `Welcome ${uName}`;

  return (
    <Fragment>
      {modSta && (
        <MyModal
          onHideModal={hideMod}
          onShowModal={showMod}
          content={welcomeMsg}
          buttonValue="close"
        ></MyModal>
      )}

      <StartingPageContent />
    </Fragment>
  );
};

export default HomePage;
