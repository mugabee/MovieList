import React from "react";
export interface IAuthContainerProps {
  header: any;
}

const AuthContainer: React.FunctionComponent<IAuthContainerProps> = (props) => {
  const { children, header } = props;

  return (
    <div className="p-20">
      <div>
        <div>
          <div className=" ">
            <div className=" ">{header}</div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
