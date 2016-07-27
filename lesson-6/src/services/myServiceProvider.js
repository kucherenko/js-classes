export function MyServiceProvider() {
  let useParam = false;

  this.useParam = function(value) {
    useParam = !!value;
  };

  this.$get = function MyServiceFactory() {

    this.useParam = useParam;
    return {
      ololo: () => alert('provider' + useParam)
    };
  };
};
