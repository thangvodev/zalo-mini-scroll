import React, { FC } from "react";
import {
  ConfigProvider,
  FormInstance,
  FormItemProps,
  FormProps,
  Form as OriginalForm,
} from "antd";

export const Form: FormComponent = (props) => {
  const requiredMark =
    props.requiredMarkPosition === "left"
      ? props.requiredMark
      : (label: React.ReactNode, { required }: { required: boolean }) => (
          <>
            {label}
            {required && (
              <span style={{ color: "red", marginLeft: "3px" }}>*</span>
            )}
          </>
        );

  return <OriginalForm requiredMark={requiredMark} {...props} />;
};

const FormItem: FormItem = ({ labelFontSize, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelFontSize: labelFontSize,
          },
        },
      }}
    >
      <OriginalForm.Item {...props} />
    </ConfigProvider>
  );
};

Form.useForm = OriginalForm.useForm;
Form.Item = FormItem;
Form.List = OriginalForm.List;
Form.Provider = OriginalForm.Provider;
Form.ErrorList = OriginalForm.ErrorList;

interface FormComponent extends React.FC<Props> {
  useForm: () => [FormInstance];
  Item: typeof FormItem;
  List: typeof OriginalForm.List;
  Provider: typeof OriginalForm.Provider;
  ErrorList: typeof OriginalForm.ErrorList;
}

type Props = FormProps & {
  requiredMarkPosition?: "left" | "right";
  children?: React.ReactNode;
};

type FormItem = FC<FormItemProps & { labelFontSize?: number }>;
