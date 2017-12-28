// Split your bills
var SplitBills = (function () {
    function Bill(id,desc,amount,friends){
        this.expenseDesc = desc;
        this.amount=amount;
        this.friends=friends;
        this.billId = id;
    }
    Bill.prototype={
        getIndAmount: function(){
            return (this.amount/this.friends.length).toFixed(2);
        },
        getId: function(){
            return this.billId;
        }
    }

    var cache, fn;
    cache = {
        bills: [],
        friends: [],
        showAddBillFrom: document.getElementById("showAddBillFrom"),
        showAddFriendForm: document.getElementById("showAddFriendForm"),

        billsToRender: document.getElementById("bills"),
        section1: document.getElementById("section1"),
        section2: document.getElementById("section2"),
        section3: document.getElementById("section3"),
        crateBillBtn: document.getElementById("crateBillBtn"),
        addFriendBtn: document.getElementById("addFriendBtn"),
        deleteBillBtn: document.getElementsByClassName("deleteBillBtn")
    }
    fn = {
        _init: function () {
            if (localStorage.length) {
                fn._getFromLocalStorage();
            } else {
                fn._getMyName();
                fn._addFrinedsToLocal(cache.friends);
            }
            fn._renderBills(cache.bills);
            fn._renderFriends(cache.friends);

            fn._bindEvents();
        },
        _bindEvents: function(){
            cache.showAddBillFrom.addEventListener('click', function(){
                cache.section2.classList.remove("hidden");
                cache.section3.classList.add("hidden");
            });
            cache.showAddFriendForm.addEventListener('click', function(){
                cache.section3.classList.remove("hidden");
                cache.section2.classList.add("hidden");
            });
            cache.crateBillBtn.addEventListener('click', function(){
                fn._addBill();
                return false;
            });
            cache.addFriendBtn.addEventListener('click', function(){
                fn._addFriend();
                return false;
            });
            Array.from(cache.deleteBillBtn).forEach(function(element) {
                element.addEventListener('click', fn._deleteBill);
            });
        },
        _getMyName: function() {
            var name;
            var person = prompt("Please enter your name:", "Jitendra Pal");
            if (person == null || person == "") {
                name = "User cancelled the prompt.";
            } else {
                name = person;
            }
            cache.friends = [{ id: 1, name: name }];
        },
        _renderBills: function(bills){
            var nBills = bills.length,billHtm="";
            if(nBills>0){
                for(b in bills){
                    billHtm += "<div class='bill'>"
                    billHtm += "<div class=''><strong>"+ bills[b].expenseDesc +"</strong></div>";
                    billHtm += "<div class=''>You Paid:"+ bills[b].amount +"</div>";
                    billHtm += "<div class='amountIndi'>Individual Amount: "+ bills[b].indAmout +"</div>";
                    billHtm += "<div class='deleteBillBtn' data-id="+ bills[b].billId +">X</div>"
                    billHtm += "</div>"
                }
                document.getElementById("billList").innerHTML = billHtm;
                cache.section1.classList.remove("hidden");
            } else {
                cache.section1.classList.add("hidden");
            }  
        },
        _renderFriends: function(friends){
            var nFriends = friends.length, friendHtm="";
            if(nFriends>0){
                for(f in friends){
                    if(friends[f].id == 1){
                        friendHtm += "<div class='friend'><input checked='true' disabled='disabled' class='friendCheck' type='checkbox'/><div data-id="+ friends[f].id +" class=''>"+ friends[f].name + "</div></div>";    
                    } else {
                        friendHtm += "<div class='friend'><input class='friendCheck' type='checkbox'/><div data-id="+ friends[f].id +" class=''>"+ friends[f].name + "</div></div>";
                    }                    
                }
                document.getElementById("friendList").innerHTML = friendHtm;
            }
        },
        _addBill: function () {
            var expenseDesc,amount,friends=[], fList, count;
            fList=document.getElementById("friendList");
            count = fList.childElementCount;
            for(var i=0;i<count;i++){
                if(fList.children[i].children[0].checked){
                    friends.push({id: fList.children[i].children[1].getAttribute("data-id"), name: fList.children[i].children[1].innerText});
                }
            }
            expenseDesc = document.getElementById("billDesc").value;
            amount = document.getElementById("billAmount").value;

            var newBill = new Bill(cache.bills.length+1, expenseDesc, amount, friends);
            
            // {
            //     billId: cache.bills.length+1,
            //     expenseDesc: expenseDesc,
            //     amount: amount,
            //     friends: friends,
            //     indAmout: (amount/friends.length).toFixed(2)
            // };

            cache.bills.push(newBill);
            fn._addBillsToLocal(cache.bills);
        },
        _deleteBill: function(){
            var id = this.getAttribute('data-id');
            for(b in cache.bills){
                if(cache.bills[b].billId == id){
                    cache.bills.splice(b,1);
                    fn._addBillsToLocal(cache.bills);
                    fn._renderBills(cache.bills);
                    return;
                }
            }
        },
        _addFriend: function(){
            var name = document.getElementById("friendName").value;
            cache.friends.push({id: cache.friends.length+1, name: name});
            fn._addFrinedsToLocal(cache.friends);
        },
        _addBillsToLocal: function(bills){
            bills = JSON.stringify(bills);
            localStorage.setItem("billList", bills);
        },
        _addFrinedsToLocal: function(friends){
            friends = JSON.stringify(friends);
            localStorage.setItem("friendList", friends);
        },
        _getFromLocalStorage: function(){
            if(localStorage.length && !!localStorage.getItem("billList")){
                cache.bills = JSON.parse(localStorage.getItem("billList"));
            }
            if(localStorage.length && !!localStorage.getItem("friendList")){
                cache.friends = JSON.parse(localStorage.getItem("friendList"));
            }
        }
    }

    return {
        init: function(){ fn._init.apply(this,arguments); }
    }
})();

SplitBills.init();



