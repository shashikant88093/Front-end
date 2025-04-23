
const withLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isloading, ...props }) {
      if (isloading) {
        return <p>Loading......................</p>;
      }
  
      return <WrappedComponent {...props} />;
    };
  };
  
  export default withLoading;
  

