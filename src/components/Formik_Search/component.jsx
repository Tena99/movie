import React from "react";
import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { search_query } from "../../app/Search/actions";
import { connect } from "react-redux";
import { Input, Space, Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./styles.css";

const Formik_Search = ({ updateSearch }) => {
  let navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.search) {
            errors.search = "Please specify your request";
          } else if (values.search.length < 3) {
            errors.search = "Must be 3 characters or more";
          } else if (values.search.length > 20) {
            errors.search = "Must be 20 characters or less";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          navigate("/search/results");
          updateSearch(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={"search_form"}>
            <div className={"search_form_item"}>
              <Field
                name={"search"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.search}
                as={"div"}
              >
                {" "}
                <Space direction="vertical">
                  <Input
                    placeholder="Find movie"
                    name={"search"}
                    onChange={(value) => handleChange(value)}
                    style={{
                      width: 200,
                    }}
                    className={"search"}
                  />
                </Space>
              </Field>

              <Field>
                {() => (
                  <Button
                    icon={<SearchOutlined />}
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className={"search_btn"}
                  />
                )}
              </Field>
            </div>

            {errors.search ? (
              <div className={"form_errors"}>
                {errors.search && touched.search && errors.search}
              </div>
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  search: state.search.search_query,
});

const mapDispatchToProps = {
  updateSearch: search_query,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formik_Search);
