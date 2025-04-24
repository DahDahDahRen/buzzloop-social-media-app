import styled from "@emotion/styled";

// Register section styles
export const StyledRegisterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .content {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 24px;
    border-radius: 16px;
  }

  .section-header {
    margin-bottom: 16px;
  }

  .section-title {
    font-size: 24px;
    line-height: 125%;
    margin-bottom: 4px;
  }

  .section-sub_title {
    font-size: 18px;
    width: 400px;
    color: rgba(0, 0, 0, 0.8);
  }

  .form-container {
    width: 420px;
  }

  .form-btn-panel {
    margin-bottom: 8px;
  }

  .span-or {
    display: block;
    text-align: center;
    margin: 8px 0;
  }

  .forget-password_link {
    display: block;
    font-size: 12px;
    color: #000;
    text-align: center;
  }
`;
