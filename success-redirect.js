const products=["Rex CRM","Spoke by Rex","Siteloft by Rex","Alfie by Rex"];function success(e){document.getElementById("Product-Selection-2").value==e&&sessionStorage.setItem("Product",e)}document.getElementById("Product-Selection-2").addEventListener("change",function(){products.forEach(success)});