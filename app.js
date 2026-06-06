// --- TÂM AN HUYỀN MỘC THANG - JAVASCRIPT LOGIC ---

// 1. DATA OF 16 RARE HERBS
const herbsData = [
    {
        id: 1,
        name: "BỒ KẾT",
        latin: "Fructus Gleditschiae",
        group: "clean",
        core: "Làm sạch tóc tự nhiên, giúp tóc mềm mượt, óng ả.",
        detail: "Bồ kết chứa hàm lượng lớn Saponin – một chất hoạt động bề mặt tự nhiên có khả năng tạo bọt, hóa lỏng dầu thừa và cuốn trôi bụi bẩn mà không làm mất đi lớp màng lipid bảo vệ da đầu. Ngoài ra, các hợp chất Flavonoid trong bồ kết (như luteolin) có tính chống oxy hóa mạnh, giúp phục hồi các nang tóc bị tổn thương, tạo một lớp màng bọc tự nhiên giúp sợi tóc giữ được độ ẩm, trở nên đen bóng và giảm chẻ ngọn rõ rệt."
    },
    {
        id: 2,
        name: "BỒ HÒN",
        latin: "Sapindus mukorossi",
        group: "clean",
        core: "Tạo bọt tự nhiên, làm sạch nhẹ dịu, kháng khuẩn.",
        detail: "Tương tự bồ kết nhưng quả bồ hòn có tỷ lệ Saponin đậm đặc hơn (lên tới 10% - 14%). Trong y học dân gian, bồ hòn đóng vai trò như một chất tẩy rửa sinh học tối ưu. Nó có khả năng kháng khuẩn, kháng nấm bề mặt cực mạnh nhưng tính chất lại vô cùng dịu nhẹ, không gây kích ứng hay làm khô da đầu như các chất tạo bọt hóa học (Sulfates). Do đó, bồ hòn rất phù hợp để làm sạch cho da đầu nhạy cảm và điều trị các tình trạng viêm da tiết bã nhẹ."
    },
    {
        id: 3,
        name: "XÀ SÀNG TỬ",
        latin: "Fructus Cnidii",
        group: "clean",
        core: "Diệt nấm mạnh mẽ, giảm ngứa, trị viêm da đầu.",
        detail: "Hoạt chất chính là Osthole mang đặc tính kháng nấm ngoại biên vô cùng mạnh mẽ, đặc biệt hiệu quả trong việc ức chế các chủng nấm gây gàu phổ biến như Malassezia. Xà sàng tử có vị cay đắng, tính bình, giúp làm giảm cảm giác ngứa ngáy ngay tức thì nhờ cơ chế làm dịu các đầu dây thần kinh cảm giác dưới da, đồng thời hỗ trợ làm lành các vết xước do gãi ngứa gây ra trên da đầu."
    },
    {
        id: 4,
        name: "LÁ DÂU",
        latin: "Tang diệp - Folium Mori",
        group: "cooling",
        core: "Thanh nhiệt, mát da đầu, giảm rụng tóc.",
        detail: "Theo Đông y, lá dâu có tác dụng phát tán phong nhiệt, làm mát huyết. Dưới góc nhìn khoa học, chiết xuất lá dâu chứa nhiều vitamin (A, C, E) và các axit amin thiết yếu nuôi dưỡng biểu bì tóc. Khi da đầu bị 'nhiệt' (biểu hiện qua việc chân tóc ê nhức, da đầu đỏ, đổ dầu nhiều), lá dâu giúp hạ nhiệt độ cục bộ, cân bằng lại tuyến bã nhờn, từ đó làm vững chắc chân tóc và ngăn ngừa hiện tượng rụng tóc do viêm nhiệt."
    },
    {
        id: 5,
        name: "TANG BẠCH BÌ",
        latin: "Cortex Mori Radicis - Vỏ rễ cây dâu tằm",
        group: "cooling",
        core: "Giảm dầu, giảm gàu, làm sạch và dịu da đầu.",
        detail: "Đây là phần vỏ rễ phơi khô của cây dâu tằm, có tính hàn. Tang bạch bì nổi tiếng với khả năng ức chế sự tăng sinh quá mức của tuyến bã nhờn. Khi lượng dầu trên da đầu được kiểm soát, môi trường sống của vi khuẩn gây gàu sẽ bị triệt tiêu. Đồng thời, các hợp chất hữu cơ trong vỏ rễ dâu giúp làm dịu hiện tượng sưng tấy, bong tróc da đầu rất tốt."
    },
    {
        id: 6,
        name: "MẪU ĐƠN BÌ",
        latin: "Cortex Moutan - Vỏ rễ cây mẫu đơn",
        group: "cooling",
        core: "Hoạt huyết nhẹ, giảm viêm, giảm đỏ, giảm kích ứng.",
        detail: "Hoạt chất Paeonol trong mẫu đơn bì là một chất kháng viêm tự nhiên cực mạnh. Nó ức chế các chất trung gian gây viêm (cytokine), từ đó làm giảm nhanh tình trạng da đầu bị đỏ ửng, nổi mẩn, hoặc kích ứng do thay đổi thời tiết hay do hóa chất uốn/nhuộm. Cơ chế hoạt huyết nhẹ của vị thuốc này cũng giúp các mao mạch dưới da đầu co giãn tốt hơn để tiếp nhận dinh dưỡng."
    },
    {
        id: 7,
        name: "PHÙ BÌNH",
        latin: "Herba Spirodelae - Bèo tấm",
        group: "cooling",
        core: "Giải độc, giảm ngứa, làm dịu da đầu nhạy cảm.",
        detail: "Phù bình là vị thuốc có vị cay, tính lạnh, chuyên dùng để chữa các chứng bệnh ngoài da do phong nhiệt gây ra. Đối với da đầu nhạy cảm (dễ bị ngứa ê ẩm, kích ứng với bọt xà phòng), phù bình đóng vai trò như một chất 'thải độc' và làm mát sâu, loại bỏ các tác nhân dị ứng tích tụ ở lỗ chân lông, trả lại sự nhẹ nhàng cho da đầu."
    },
    {
        id: 8,
        name: "NGẢI CỨU",
        latin: "Ngải diệp - Herba Artemisiae Argyi",
        group: "warm",
        core: "Ấm kinh lạc vùng đầu, giảm đau đầu, thư giãn.",
        detail: "Ngải cứu chứa lượng tinh dầu dồi dào (chủ yếu là cineol và thujone) mang tính ấm sâu. Khi được thẩm thấu qua da đầu trong quá trình gội trị liệu, ngải cứu giúp giải tỏa sự co thắt của các mạch máu vùng đầu, hành khí hoạt huyết, trục xuất 'phong hàn' tích tụ (nguyên nhân gây đau nửa đầu, nặng đầu khi gặp gió lạnh), đem lại cảm giác thư thái sâu sắc."
    },
    {
        id: 9,
        name: "GƯNG KHÔ",
        latin: "Can khương - Rhizoma Zingiberis",
        group: "warm",
        core: "Tăng tuần hoàn máu, giảm lạnh đầu, giảm căng thẳng.",
        detail: "Thành phần Gingerol và Shogaol trong gừng khô có tác dụng giãn mạch mạnh mẽ tại vùng da tiếp xúc. Việc này làm tăng lưu lượng máu lưu thông đến các nang tóc một cách đột biến, kích thích các nang tóc 'tỉnh giấc' và hấp thụ dưỡng chất tốt hơn. Vị cay ấm của can khương triệt tiêu cảm giác lạnh buốt da đầu, hỗ trợ giảm nhanh các cơn đau đầu do căng thẳng thần kinh (stress)."
    },
    {
        id: 10,
        name: "HÀ THỦ Ô",
        latin: "Radix Fallopia Multiflora",
        group: "restore",
        core: "Bổ can thận, đen tóc, giảm bạc sớm, giảm rụng tóc.",
        detail: "Cổ ngữ có câu 'Muốn cho xanh tóc đỏ da, rủ nhau lên núi tìm hà thủ ô'. Y học hiện đại chứng minh chiết xuất hà thủ ô đỏ có khả năng kích thích sự tổng hợp Melanin (sắc tố làm đen tóc) trong dịch nang tóc. Đồng thời, bằng cách bồi bổ hệ Can - Thận (theo Đông y), vị thuốc này tác động trực tiếp vào phần 'huyết dư' (tóc), giúp tăng tuổi thọ của sợi tóc, chuyển dịch tóc từ giai đoạn rụng (telogen) trở lại giai đoạn mọc (anagen)."
    },
    {
        id: 11,
        name: "NỮ TRINH TỬ",
        latin: "Fructus Ligustri Lucidi",
        group: "restore",
        core: "Bổ can thận, chống lão hóa nang tóc, tóc chắc khỏe.",
        detail: "Đây là quả chín phơi khô của cây nữ trinh, giàu axit oleanolic và các chất chống oxy hóa mạnh. Nữ trinh tử giúp trung hòa các gốc tự do – tác nhân chính gây lão hóa nang tóc khiến tóc bị teo sợi, xơ xác và chuyển bạc. Vị thuốc này giữ cho cấu trúc cơ bản của sợi tóc luôn săn chắc, dẻo dai từ bên trong."
    },
    {
        id: 12,
        name: "TRẮC BÁCH DIỆP",
        latin: "Cacumen Biotae",
        group: "restore",
        core: "Giảm rụng tóc, se khít chân tóc, hỗ trợ mọc tóc.",
        detail: "Trắc bách diệp (lá cây trắc bách) chứa lượng tinh dầu và tannin đặc trưng. Chất tannin có tác dụng làm săn se bề mặt da, 'se khít' lỗ chân lông và các nang tóc đang bị giãn rộng (nang tóc lỏng lẻo là lý do tóc dễ bị rụng khi chải hoặc gội). Ngoài ra, nó còn có khả năng làm mát huyết, ngăn chặn tình trạng rụng tóc hàng loạt do nội tiết hoặc do stress nhiệt."
    },
    {
        id: 13,
        name: "NHỌ NỒI",
        latin: "Cỏ mực - Herba Ecliptae",
        group: "restore",
        core: "Làm đen tóc, kích thích mọc tóc, mát máu.",
        detail: "Nhọ nồi chứa các chất như wedelolactone và demethylwedelolactone có hoạt tính sinh học cao. Khi giã nhọ nồi, nước tiết ra có màu đen đặc trưng – chất này ngấm vào biểu bì tóc giúp làm đậm màu tóc tự nhiên. Khả năng 'lương huyết' (mát máu) của nhọ nồi giúp giải quyết tận gốc các chứng rụng tóc do cơ địa nóng trong."
    },
    {
        id: 14,
        name: "ĐƯƠNG QUY",
        latin: "Radix Angelicae Sinensis",
        group: "restore",
        core: "Bổ huyết, hoạt huyết, nuôi dưỡng chân tóc từ gốc.",
        detail: "Được mệnh danh là 'nhân sâm của phụ nữ', đương quy chứa hàm lượng Vitamin B12 và Axit Folic cực cao, đóng vai trò cốt lõi trong quá trình tái tạo hồng cầu. Tóc được nuôi dưỡng hoàn toàn bởi các mao mạch máu dưới da đầu. Đương quy giúp chất lượng máu tốt hơn và lưu thông mạnh mẽ hơn đến tận cùng các nang tóc nhỏ nhất, giúp 'bón phân' cho chân tóc phát triển khỏe mạnh."
    },
    {
        id: 15,
        name: "LINH CHI",
        latin: "Ganoderma lucidum",
        group: "premium",
        core: "Tăng miễn dịch da đầu, chống lão hóa, an thần.",
        detail: "Chứa hàm lượng cao Polysaccharides và Triterpenes. Đối với vùng đầu, Linh chi đóng vai trò nâng cao hàng rào miễn dịch tự nhiên của da đầu, chống lại các tác nhân ô nhiễm môi trường và hóa chất tích tụ. Tác dụng an thần của Linh chi tác động lên hệ thần kinh trung ương thông qua mùi hương và sự thẩm thấu, làm chậm nhịp tim, thư giãn các tế bào thần kinh, giúp ngủ ngon sâu giấc."
    },
    {
        id: 16,
        name: "VỎ CÂY DU",
        latin: "Cortex Ulmi",
        group: "premium",
        core: "Tạo độ sánh tự nhiên, làm mềm và mượt tóc tự nhiên.",
        detail: "Khi được nấu hoặc ngâm, vỏ cây du tiết ra một lớp chất nhầy tự nhiên (Mucilage) dồi dào. Trong công thức dầu gội thảo dược, đây là thành phần thay thế hoàn hảo cho Silicon hóa học. Chất nhầy này phủ một lớp màng sinh học siêu mỏng, khóa chặt độ ẩm và toàn bộ dưỡng chất từ 15 vị thuốc trên lại bên trong sợi tóc và bề mặt da đầu. Nhờ đó, mái tóc có được độ suôn mượt, óng ả và bồng bềnh hoàn toàn tự nhiên mà không lo bết dính hay bít tắc chân tóc."
    }
];

// --- 2. HERBS RENDER & FILTER LOGIC ---
const herbsContainer = document.getElementById("herbs-container");
const herbsTabs = document.getElementById("herbs-tabs");

function renderHerbs(filter = "all") {
    herbsContainer.innerHTML = "";
    
    const filteredHerbs = filter === "all" 
        ? herbsData 
        : herbsData.filter(herb => herb.group === filter);
        
    filteredHerbs.forEach((herb, index) => {
        const card = document.createElement("div");
        card.className = "herb-card";
        card.setAttribute("data-id", herb.id);
        
        card.innerHTML = `
            <span class="herb-index">#${String(herb.id).padStart(2, '0')}</span>
            <h3>${herb.name}</h3>
            <span class="herb-latin">${herb.latin}</span>
            <div class="herb-core">💡 ${herb.core}</div>
            <p class="herb-desc">${herb.detail.substring(0, 120)}...</p>
            <button class="btn-herb-detail" onclick="toggleHerbDetail(${herb.id}, this)">
                Xem phân tích dược lý ▼
            </button>
            <div class="herb-deep-detail" style="display: none; margin-top: 15px; padding-top: 15px; border-top: 1px dashed rgba(15, 62, 43, 0.1); font-size: 0.85rem; color: var(--text-dark);">
                ${herb.detail}
            </div>
        `;
        
        herbsContainer.appendChild(card);
    });
}

function toggleHerbDetail(id, btn) {
    const card = btn.closest(".herb-card");
    const detailDiv = card.querySelector(".herb-deep-detail");
    const descP = card.querySelector(".herb-desc");
    
    if (detailDiv.style.display === "none") {
        detailDiv.style.display = "block";
        descP.style.display = "none";
        btn.innerHTML = "Thu gọn ▲";
        btn.style.backgroundColor = "var(--primary-light)";
        btn.style.color = "var(--bg-light)";
    } else {
        detailDiv.style.display = "none";
        descP.style.display = "block";
        btn.innerHTML = "Xem phân tích dược lý ▼";
        btn.style.backgroundColor = "transparent";
        btn.style.color = "var(--primary-light)";
    }
}

// Attach filter tabs event listeners
if (herbsTabs) {
    herbsTabs.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            // Remove active from all
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            // Add active to current
            e.target.classList.add("active");
            
            const filterValue = e.target.getAttribute("data-filter");
            renderHerbs(filterValue);
        }
    });
}

// --- 3. SCARCITY ENGINE (FREE TRIAL SUITS) ---
const spotsCounter = document.getElementById("spots-counter");
const spotsProgressFill = document.getElementById("spots-progress-fill");
const offerTimer = document.getElementById("offer-timer");

let remainingSpots = parseInt(localStorage.getItem("tam_an_remaining_spots"));
if (isNaN(remainingSpots)) {
    remainingSpots = 10;
}

function updateScarcityUI() {
    if (spotsCounter) {
        spotsCounter.textContent = remainingSpots;
    }
    if (spotsProgressFill) {
        const percentage = (remainingSpots / 10) * 100;
        spotsProgressFill.style.width = `${percentage}%`;
        
        // Change color based on remaining spots
        if (remainingSpots <= 3) {
            spotsProgressFill.style.backgroundColor = "var(--accent)";
        } else {
            spotsProgressFill.style.backgroundColor = "var(--secondary)";
        }
    }
    localStorage.setItem("tam_an_remaining_spots", remainingSpots);
}

// Simulating live demand decreasing spots over time
function simulateDemand() {
    if (remainingSpots > 3) {
        // 30% chance to drop a spot
        if (Math.random() < 0.3) {
            remainingSpots--;
            updateScarcityUI();
        }
    } else if (remainingSpots > 1) {
        // 10% chance to drop if spots are very low, to maintain urgency without hitting 0 immediately
        if (Math.random() < 0.1) {
            remainingSpots--;
            updateScarcityUI();
        }
    }
}

// Scarcity Countdown Timer
let timerSeconds = 15 * 60; // 15 minutes

function startCountdown() {
    const interval = setInterval(() => {
        let minutes = Math.floor(timerSeconds / 60);
        let seconds = timerSeconds % 60;
        
        // Format with leading zeros
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        
        if (offerTimer) {
            offerTimer.textContent = `${minutes}:${seconds}`;
        }
        
        if (timerSeconds <= 0) {
            // Reset back to 15m to maintain fake urgency
            timerSeconds = 15 * 60;
        } else {
            timerSeconds--;
        }
    }, 1000);
}

// --- 4. STICKY NAVBAR & MOBILE MENU ---
const mainHeader = document.getElementById("main-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNavMenu = document.getElementById("mobile-nav-menu");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add("scrolled");
    } else {
        mainHeader.classList.remove("scrolled");
    }
});

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileNavMenu.classList.toggle("active");
        
        // Toggle hamburger icon animation
        const spans = menuToggle.querySelectorAll("span");
        if (menuToggle.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });
}

// Close mobile menu on clicking any link
document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mobileNavMenu.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    });
});

// --- 5. FORM HANDLING & LOCALSTORAGE DATABASE ---
const leadForm = document.getElementById("lead-form");
const successDialog = document.getElementById("success-dialog");

// Inputs
const fullnameInput = document.getElementById("fullname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

// Error Spans
const errFullname = document.getElementById("error-fullname");
const errPhone = document.getElementById("error-phone");
const errEmail = document.getElementById("error-email");

function validateFullname() {
    const val = fullnameInput.value.trim();
    if (!val) {
        showError(fullnameInput, errFullname, "Họ và tên không được để trống");
        return false;
    } else if (val.length < 3) {
        showError(fullnameInput, errFullname, "Họ và tên phải dài ít nhất 3 ký tự");
        return false;
    }
    clearError(fullnameInput, errFullname);
    return true;
}

function validatePhone() {
    const val = phoneInput.value.trim();
    // Vietnamese phone numbers regex (10 digits, starting with 0, matching common prefixes)
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;
    if (!val) {
        showError(phoneInput, errPhone, "Số điện thoại không được để trống");
        return false;
    } else if (!phoneRegex.test(val)) {
        showError(phoneInput, errPhone, "Số điện thoại không đúng định dạng Việt Nam (10 chữ số, vd: 0912345678)");
        return false;
    }
    clearError(phoneInput, errPhone);
    return true;
}

function validateEmail() {
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
        showError(emailInput, errEmail, "Email không được để trống");
        return false;
    } else if (!emailRegex.test(val)) {
        showError(emailInput, errEmail, "Địa chỉ email không đúng định dạng");
        return false;
    }
    clearError(emailInput, errEmail);
    return true;
}

function showError(input, errorSpan, message) {
    input.closest(".input-wrapper").classList.add("error");
    errorSpan.textContent = message;
    errorSpan.style.display = "block";
}

function clearError(input, errorSpan) {
    input.closest(".input-wrapper").classList.remove("error");
    errorSpan.textContent = "";
    errorSpan.style.display = "none";
}

// Real-time blur validations
if (fullnameInput) fullnameInput.addEventListener("blur", validateFullname);
if (phoneInput) phoneInput.addEventListener("blur", validatePhone);
if (emailInput) emailInput.addEventListener("blur", validateEmail);

// Radio selection styling toggle
function toggleRadioStyle(val) {
    const radioFree = document.getElementById("radio-label-free");
    const radioPaid = document.getElementById("radio-label-paid");
    
    if (val === 'free') {
        radioFree.classList.add("active");
        radioPaid.classList.remove("active");
    } else {
        radioPaid.classList.add("active");
        radioFree.classList.remove("active");
    }
}

// Function to programmatically select package type (from cards)
function selectPackage(type) {
    const radioBtn = document.querySelector(`input[name="package_type"][value="${type}"]`);
    if (radioBtn) {
        radioBtn.checked = true;
        toggleRadioStyle(type);
    }
    
    // Smooth scroll to form
    const formSection = document.getElementById("register");
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Submit Handling
if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Run all validations
        const isNameValid = validateFullname();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        
        if (isNameValid && isPhoneValid && isEmailValid) {
            const fullname = fullnameInput.value.trim();
            const phone = phoneInput.value.trim();
            const email = emailInput.value.trim();
            const selectedPackage = document.querySelector('input[name="package_type"]:checked').value;
            
            // Generate lead object
            const lead = {
                id: Date.now(),
                fullname: fullname,
                phone: phone,
                email: email,
                package: selectedPackage === "free" ? "Dùng thử miễn phí (0đ)" : "Gói Cao Cấp (499.000đ)",
                timestamp: new Date().toLocaleString("vi-VN")
            };
            
            // Save to LocalStorage
            let currentLeads = JSON.parse(localStorage.getItem("tam_an_leads")) || [];
            currentLeads.push(lead);
            localStorage.setItem("tam_an_leads", JSON.stringify(currentLeads));
            
            // If registered for free trial, decrease scarcity counter
            if (selectedPackage === "free" && remainingSpots > 0) {
                remainingSpots--;
                updateScarcityUI();
            }
            
            // Show Success native Dialog
            document.getElementById("summary-name").textContent = lead.fullname;
            document.getElementById("summary-phone").textContent = lead.phone;
            document.getElementById("summary-email").textContent = lead.email;
            document.getElementById("summary-package").textContent = lead.package;
            
            if (selectedPackage === "free") {
                document.getElementById("success-message").innerHTML = `Bạn đã nhận thành công <strong>Gói dùng thử 0đ (chai 50ml)</strong>.`;
            } else {
                document.getElementById("success-message").innerHTML = `Bạn đã đặt mua thành công <strong>Gói Trải Nghiệm Cao Cấp 499.000đ</strong>.`;
            }
            
            if (successDialog) {
                successDialog.showModal();
            }
            
            // Reset Form & active radios
            leadForm.reset();
            toggleRadioStyle('free');
        }
    });
}

function closeSuccessDialog() {
    if (successDialog) {
        successDialog.close();
    }
}

// --- 6. FAQ ACCORDION ---
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const isActive = item.classList.contains("active");
        
        // Close all items
        document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
        
        // Open if was not active
        if (!isActive) {
            item.classList.add("active");
        }
    });
});



// --- 8. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Render herbs explorer
    renderHerbs("all");
    
    // Set up scarcity counter & countdown
    updateScarcityUI();
    startCountdown();
    
    // Run simulated demand tick every 45 seconds
    setInterval(simulateDemand, 45000);
});
