function path(root, sublink) {
  return `${root}${sublink}`;
}

const roots = "/";
const auth = "/auth/";
const product = "/products";
export const Path = {
  root: roots,
  general: {
    home: path(roots, "home"),
    contact: path(roots, "contact"),
    blogs: path(roots, "blogs"),
  },
  products: {
    all: path(product, ""),
    detail: (id = ":id") => path(product, `/${id}`),
    card: path(product, "/cart"),
    wishlist: path(product, "/wishlist"),
    checkout_shipping: path(product, "/checkout/shipping"),
    checkout_payment: path(product, "/checkout/payment"),
    checkout_reviewOrder: path(product, "/checkout/revieworder"),
    checkout_completion: path(product, "/checkout/completion"),
  },
  auth: {
    login: path(auth, "login"),
    register: path(auth, "register"),
    forget_password: path(auth, "forget-password"),
    reset_password: path(auth, "reset-password"),
  },
};
