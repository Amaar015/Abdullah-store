import Products from "../models/product.js";

// post/create products
export const createProduct = async (req, res) => {
  try {
    let {
      name,
      price,
      price_before,
      stock,
      category,
      variety,
      size,
      color,
      description,
      benefits,
    } = req.body;

    if (!price && !name && !stock && !category && !variety) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existing_product = await Products.findOne({
      name,
      price,
      category,
      variety,
    });
    if (existing_product) {
      return res.status(400).json({
        success: false,
        message: "Product Already exisits",
      });
    } else {
      let imagePath = [];
      if (req.files && req.files.length > 0) {
        imagePath = req.files.map((file) => `/uploads/${file.filename}`);
      }

      const product = await Products.create({
        name,
        price,
        price_before,
        stock,
        category,
        variety,
        size,
        color,
        description,
        benefits,
        images: imagePath,
      });
      return res.status(200).json({
        message: "Product Create Successfully",
        success: true,
        product,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

// get products
export const getProducts = async (req, res) => {
  try {
    const { page, limit, offset } = req.pagination;

    const [product, total] = await Promise.all([
      Products.find().skip(offset).limit(limit),
      Products.countDocuments(),
    ]);
    // const total = product.length;
    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Product dose not exist",
      });
    } else {
      return res.status(200).json({
        meta: {
          limit: limit,
          offset: offset,
          totalCount: total,
          message: "product found",
          success: true,
        },
        data: product,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

// get one (1) products
export const getProduct = async (req, res) => {
  try {
    let { id } = req.params;
    const product = await Products.findById(id);
    return res.status(200).json({
      message: "prduct found",
      success: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

// update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(req.body);
    const product = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(400).json({
        message: "Something went wrong",
        success: false,
      });
    } else {
      return res.status(200).json({
        message: "product updated Successfully",
        success: true,
        product,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

// delete products
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndDelete({ _id: id });
    if (product) {
      return res.status(200).json({
        message: "Product deleted Successfully",
        success: true,
        product,
      });
    } else {
      return res.status.json({
        message: "Something went wrong",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};
