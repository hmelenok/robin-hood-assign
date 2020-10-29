import React, { Fragment } from 'react';
import Button from '@atlaskit/button/standard-button';
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form';

import Textfield from '@atlaskit/textfield';

export interface FormData {
  name: string
}

const AdduserBlock = ({ onSubmit }: {onSubmit: (formData: FormData) => void}) => (
  <Form
    onSubmit={(formState: FormData) => onSubmit(formState)}
  >
    {({ formProps }: any) => (
      <form {...formProps}>
        <Field name="name" defaultValue="" isRequired>
          {({ fieldProps }: any) => (
            <>
              <Textfield {...fieldProps} placeholder="Enter name" />
              <HelperMessage>
                Add here you collegue
              </HelperMessage>
            </>
          )}

        </Field>
        <FormFooter>
          <Button css={{}} type="submit" appearance="primary">
            Add
          </Button>
        </FormFooter>
      </form>
    )}
  </Form>
);

export default AdduserBlock;
