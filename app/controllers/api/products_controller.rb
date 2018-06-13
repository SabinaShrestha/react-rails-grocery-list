class Api::ProductsController < Api::ApiController
  before_action :set_product, only: [:update, :destroy]


  def index
    render json: Product.all.order(:category)
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render_errors(products)
    end
  end

  def update
    @product.update(purchsed: !@product.purchased)
    render json: @product
  end

  def destroy
    @product.destroy
  end


  private
    def set_product
      @product = Product.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name, :category, :purchased)
    end



end
