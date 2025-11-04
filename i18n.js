// Multi-language system for BHAD Garment Website
// English (primary) and Vietnamese (secondary)

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us", 
        nav_capacity: "Capacity",
        nav_production: "Production Process",
        nav_quality: "Quality Control",
        nav_management: "Management",
        nav_equipment: "Equipment",
        nav_products: "Products",
        nav_certificates: "Certificates",
        nav_contact: "Contact",
        
        // Hero Section
        hero_subtitle: "Professional Garment Manufacturer - High Quality - Reliable",
        hero_products_per_year: "Products/year",
        hero_employees: "Employees", 
        hero_years_experience: "Years Experience",
        hero_learn_more: "Learn More",
        
        // About Section
        about_title: "About Us",
        about_subtitle: "Since 2011, BHAD Garment has been committed to providing the highest quality products",
        about_established_title: "Established in 2011",
        about_established_desc: "Officially established on June 16, 2011 in Thanh Hoa, Vietnam",
        about_mission_title: "Mission",
        about_mission_desc: "Focus on intellect and strength to overcome difficulties, seize opportunities, innovate awareness",
        about_values_title: "Core Values",
        about_values_desc: "Quality above all. Reputation in customer service. Customer satisfaction is the success of the enterprise",
        
        // Capacity Section
        capacity_title: "Production Capacity",
        capacity_subtitle: "Modern infrastructure with 25,000 m² area and advanced production lines",
        
        // Production Process Section
        production_title: "Production Process",
        production_subtitle: "From modern machinery to product finishing - Professional process",
        process_cnc_title: "CNC Automatic Machine",
        process_cnc_desc: "High technology with digital control screen, precise material processing",
        process_juck_title: "JUCK Sewing Machine", 
        process_juck_desc: "Professional workers with detailed work instructions, ensuring quality",
        process_zoje_title: "ZOJE Sewing Machine",
        process_zoje_desc: "Sports product production with XDY Sport logo, high precision",
        process_quality_title: "Quality Inspection & Folding",
        process_quality_desc: "Meticulous workers fold and inspect each product before packaging",
        process_ironing_title: "Product Finishing",
        process_ironing_desc: "Ironing and folding products with various colors, ready for export",
        process_packaging_title: "Professional Packaging",
        process_packaging_desc: "Packaging team with many carefully wrapped and categorized products",
        
        // Quality Control Section  
        quality_title: "Quality Control",
        quality_subtitle: "Strict QC/QA system with 32 experienced specialists",
        
        // Management Section
        management_title: "Management Structure",
        management_subtitle: "Experienced and professional leadership team",
        
        // Equipment Section
        equipment_title: "Equipment List",
        equipment_subtitle: "Over 700 modern machines from world-leading countries",
        
        // Products Section
        products_title: "Products & Clients",
        products_subtitle: "Serving famous global brands with the highest quality",
        
        // Certificates Section
        certificates_title: "Certificates & Awards",
        certificates_subtitle: "Prestigious certifications from international organizations",
        
        // Contact Section
        contact_title: "Contact Us",
        contact_subtitle: "Ready to cooperate and serve customers",
        
        // Button Text
        button_learn_more: "Learn More",
        button_print: "Print Certificates",
        
        // Images Alt Text
        img_factory_entrance: "BHAD Garment Factory Entrance",
        img_logo: "BHAD Garment Logo",
        img_qc_floor: "BHAD Garment Factory Floor - Quality Control",
        img_showroom: "BHAD Garment Showroom and Meeting Room",
        img_production_lines: "BHAD Production Lines Overview",
        img_export_center: "BHAD Export Center Showroom",
        img_cnc_machine: "CNC Automatic Machine PUMA",
        img_juck_machine: "JUCK Sewing Machine with Work Instructions",
        img_zoje_machine: "ZOJE Sewing Machine - Sports Production",
        img_quality_check: "Quality Check and Folding Process",
        img_ironing: "Ironing and Folding Finishing",
        img_packaging: "Professional Packaging Area",
        img_warehouse: "BHAD Warehouse with Fabric Information",
        img_compliance: "BHAD Garment Office - Compliance Room",
        img_product: "BHAD Garment Puffer Jacket Production",
        
        // Gallery Images
        gallery_overview_title: "Factory Overview",
        gallery_overview_desc: "10 modern production lines with over 700 machines",
        gallery_export_title: "Export Center",
        gallery_export_desc: "Showroom displaying products for international clients",
        gallery_lines_title: "Production Lines",
        gallery_lines_desc: "10 lines with strict quality control system"
        img_quality_check: "Folding and Quality Inspection",
        img_ironing: "Folding and Ironing Finishing",
        img_packaging: "Professional Packaging Area",
        img_warehouse: "BHAD Warehouse with Fabric Information",
        img_compliance: "BHAD Garment Office - Compliance Room",
        img_product: "BHAD Garment Puffer Jacket Production"
    },
    
    vi: {
        // Navigation
        nav_home: "Trang chủ",
        nav_about: "Về chúng tôi",
        nav_capacity: "Năng lực", 
        nav_production: "Quy trình",
        nav_quality: "Chất lượng",
        nav_management: "Quản lý",
        nav_equipment: "Máy móc",
        nav_products: "Sản phẩm",
        nav_certificates: "Chứng nhận",
        nav_contact: "Liên hệ",
        
        // Hero Section
        hero_subtitle: "Nhà sản xuất may mặc chuyên nghiệp - Chất lượng cao - Đáng tin cậy",
        hero_products_per_year: "Sản phẩm/năm",
        hero_employees: "Nhân viên",
        hero_years_experience: "Năm kinh nghiệm", 
        hero_learn_more: "Tìm hiểu thêm",
        
        // About Section
        about_title: "Về chúng tôi",
        about_subtitle: "Từ năm 2011 đến nay, BHAD Garment luôn cam kết mang đến những sản phẩm chất lượng cao nhất",
        about_established_title: "Thành lập năm 2011",
        about_established_desc: "Chính thức thành lập ngày 16 tháng 6 năm 2011 tại Thanh Hóa, Việt Nam",
        about_mission_title: "Sứ mệnh",
        about_mission_desc: "Tập trung vào trí tuệ và sức mạnh để vượt qua khó khăn, nắm bắt cơ hội, đổi mới nhận thức",
        about_values_title: "Giá trị cốt lõi",
        about_values_desc: "Chất lượng trên hết. Uy tín trong phục vụ khách hàng. Sự hài lòng của khách hàng là thành công của doanh nghiệp",
        
        // Capacity Section
        capacity_title: "Năng lực sản xuất",
        capacity_subtitle: "Cơ sở hạ tầng hiện đại với diện tích 25.000 m² và dây chuyền sản xuất tiên tiến",
        
        // Production Process Section
        production_title: "Quy trình sản xuất",
        production_subtitle: "Từ máy móc hiện đại đến hoàn thiện sản phẩm - Quy trình chuyên nghiệp",
        process_cnc_title: "Máy CNC tự động",
        process_cnc_desc: "Công nghệ cao với màn hình điều khiển kỹ thuật số, xử lý vật liệu chính xác",
        process_juck_title: "Máy may JUCK",
        process_juck_desc: "Công nhân chuyên nghiệp với tài liệu hướng dẫn chi tiết, đảm bảo chất lượng",
        process_zoje_title: "Máy may ZOJE",
        process_zoje_desc: "Sản xuất đồ thể thao với logo XDY Sport, độ chính xác cao",
        process_quality_title: "Kiểm tra & Gấp sản phẩm",
        process_quality_desc: "Công nhân tỉ mỉ gấp và kiểm tra từng sản phẩm trước khi đóng gói",
        process_ironing_title: "Hoàn thiện sản phẩm",
        process_ironing_desc: "Ủi và gấp sản phẩm với nhiều màu sắc khác nhau, sẵn sàng xuất khẩu",
        process_packaging_title: "Đóng gói chuyên nghiệp",
        process_packaging_desc: "Đội ngũ đóng gói với nhiều sản phẩm được bọc cẩn thận và phân loại",
        
        // Quality Control Section
        quality_title: "Kiểm soát chất lượng",
        quality_subtitle: "Hệ thống QC/QA nghiêm ngặt với 32 chuyên viên kinh nghiệm",
        
        // Management Section
        management_title: "Bộ máy quản lý",
        management_subtitle: "Đội ngũ lãnh đạo giàu kinh nghiệm và chuyên nghiệp",
        
        // Equipment Section
        equipment_title: "Danh sách máy móc",
        equipment_subtitle: "Hơn 700 máy móc hiện đại từ các nước hàng đầu thế giới",
        
        // Products Section
        products_title: "Sản phẩm & Khách hàng",
        products_subtitle: "Phục vụ các thương hiệu nổi tiếng toàn cầu với chất lượng cao nhất",
        
        // Certificates Section
        certificates_title: "Chứng nhận & Giải thưởng",
        certificates_subtitle: "Những chứng nhận uy tín từ các tổ chức quốc tế",
        
        // Contact Section
        contact_title: "Liên hệ với chúng tôi",
        contact_subtitle: "Sẵn sàng hợp tác và phục vụ quý khách hàng",
        
        // Button Text
        button_learn_more: "Tìm hiểu thêm",
        button_print: "In Chứng Nhận",
        
        // Images Alt Text
        img_factory_entrance: "Cổng vào nhà máy BHAD Garment",
        img_logo: "Logo BHAD Garment",
        img_qc_floor: "Tầng nhà máy BHAD - Kiểm soát chất lượng",
        img_showroom: "Showroom và phòng họp BHAD",
        img_production_lines: "Tổng quan dây chuyền sản xuất BHAD",
        img_export_center: "Showroom trung tâm xuất khẩu BHAD",
        img_cnc_machine: "Máy CNC tự động PUMA",
        img_juck_machine: "Máy may JUCK với tài liệu hướng dẫn",
        img_zoje_machine: "Máy may ZOJE - Sản phẩm thể thao",
        img_quality_check: "Gấp và kiểm tra chất lượng",
        img_ironing: "Gấp và ủi hoàn thiện",
        img_packaging: "Khu vực đóng gói chuyên nghiệp",
        img_warehouse: "Kho hàng BHAD với bảng thông tin vải",
        img_compliance: "Văn phòng BHAD - Phòng tuân thủ",
        img_product: "Sản xuất áo khoác phao BHAD",
        
        // Gallery Images
        gallery_overview_title: "Tổng quan nhà máy",
        gallery_overview_desc: "10 dây chuyền sản xuất hiện đại với hơn 700 máy móc",
        gallery_export_title: "Trung tâm xuất khẩu",
        gallery_export_desc: "Showroom trưng bày sản phẩm cho khách hàng quốc tế",
        gallery_lines_title: "Dây chuyền sản xuất",
        gallery_lines_desc: "10 dây chuyền với hệ thống kiểm soát chất lượng nghiêm ngặt"
    }
};

// Language management
class I18nManager {
    constructor() {
        this.currentLang = 'en'; // Default to English
        this.init();
    }
    
    init() {
        // Set default language from browser or localStorage
        const savedLang = localStorage.getItem('bhad_language') || 
                         (navigator.language.startsWith('vi') ? 'vi' : 'en');
        this.setLanguage(savedLang);
        this.setupLanguageSwitcher();
        this.addDataKeys();
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('bhad_language', lang);
        this.updateContent();
        this.updateLanguageButtons();
    }
    
    getTranslation(key) {
        return translations[this.currentLang][key] || key;
    }
    
    updateContent() {
        // Update all elements with data-key attributes
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = this.getTranslation(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update alt attributes for images
        const images = document.querySelectorAll('img[data-key]');
        images.forEach(img => {
            const key = img.getAttribute('data-key');
            const translation = this.getTranslation(key);
            img.alt = translation;
        });
    }
    
    updateLanguageButtons() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
        });
    }
    
    setupLanguageSwitcher() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }
    
    addDataKeys() {
        // Add data-key attributes to important elements dynamically if not already present
        
        // Ensure all important elements have data-key attributes
        const elements = {
            // Navigation is already done in HTML
            '.hero-subtitle': 'hero_subtitle',
            '[data-key="hero_products_per_year"]': 'hero_products_per_year', // Already exists
            '[data-key="hero_employees"]': 'hero_employees', // Already exists  
            '[data-key="hero_years_experience"]': 'hero_years_experience', // Already exists
            '.cta-button': 'hero_learn_more',
            
            // About section already has data-keys
            // Capacity section already has data-keys
            
            // Production section
            '#production h2': 'production_title',
            '#production .section-header p': 'production_subtitle',
            
            // Quality section
            '#quality h2': 'quality_title', 
            '#quality .section-header p': 'quality_subtitle',
            
            // Management section
            '#management h2': 'management_title',
            '#management .section-header p': 'management_subtitle',
            
            // Equipment section
            '#equipment h2': 'equipment_title',
            '#equipment .section-header p': 'equipment_subtitle',
            
            // Products section
            '#products h2': 'products_title',
            '#products .section-header p': 'products_subtitle',
            
            // Certificates section
            '#certificates h2': 'certificates_title',
            '#certificates .section-header p': 'certificates_subtitle',
            
            // Contact section
            '#contact h2': 'contact_title',
            '#contact .section-header p': 'contact_subtitle'
        };
        
        // Add missing data-key attributes
        Object.entries(elements).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element && !element.getAttribute('data-key')) {
                element.setAttribute('data-key', key);
            }
        });
    }
}

// Initialize i18n when DOM is loaded
function initializeI18n() {
    if (typeof window.i18n !== 'undefined') {
        console.log('i18n already initialized');
        return;
    }
    
    window.i18n = new I18nManager();
    console.log('Multi-language system initialized: English (EN) / Tiếng Việt (VI)');
}

// Initialize immediately if DOM is ready, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeI18n);
} else {
    initializeI18n();
}

// Fallback initialization
setTimeout(initializeI18n, 100);