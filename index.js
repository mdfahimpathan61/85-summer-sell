let total = 0;

function getPrice(data) {
    const itemsName = data.parentNode.childNodes[5].innerText;
    const setItemName = document.getElementById('order-list');
    const li = document.createElement('li');
    li.innerText = itemsName;
    setItemName.appendChild(li);

    const price = data.parentNode.childNodes[7].innerText.split(' ')[0];
    total = total + parseFloat(price);
    // console.log(total);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total.toFixed(2);
    const couponBtn = document.getElementById('coupon-btn')
    const purchase = document.getElementById('purchase')

   






    if (total > 0) {
        purchase.removeAttribute('disabled')
        const discountTotalId = document.getElementById('total')
             discountTotalId.innerText = total.toFixed(2);

        if (total >= 200) {
            couponBtn.removeAttribute('disabled')
            const couponCode = document.getElementById('coupon-code-field').value;

            if (couponCode === 'SELL200') {
                cpnBtn()
                
            }
        }
        else {
            couponBtn.setAttribute('disabled');
             
            
        }
    }
    else {
        purchase.setAttribute('disabled')
    }
}


document.getElementById('coupon-btn').addEventListener('click', function cpnBtn() {
    const discountId = document.getElementById('discount')
    const discountTotalId = document.getElementById('total');
    // const discountTotal = discountTotalId.innerText;
    const percentise = 20 / 100
    const discount = total * percentise


    discountId.innerText = discount.toFixed(2);
    discountTotalId.innerText = total.toFixed(2) - discount.toFixed(2);

})



