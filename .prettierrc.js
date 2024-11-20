module.exports = {
    arrowParens: 'avoid', // Bỏ ngoặc đơn xung quanh tham số duy nhất trong arrow function để mã gọn hơn
    bracketSameLine: true, // Đặt dấu ngoặc nhọn đóng của JSX cùng dòng với tag mở
    bracketSpacing: true, // Giữ khoảng trắng bên trong dấu ngoặc nhọn
    embeddedLanguageFormatting: 'auto', // Tự động định dạng mã nhúng (ví dụ: trong HTML hoặc Markdown)
    htmlWhitespaceSensitivity: 'ignore', // Không nhạy cảm với khoảng trắng trong HTML
    insertPragma: false, // Không thêm @format pragma vào đầu file
    jsxSingleQuote: true, // Sử dụng dấu nháy đơn trong JSX
    printWidth: 80, // Giới hạn độ rộng dòng để code dễ đọc hơn (mặc định là 80)
    proseWrap: 'always', // Luôn wrap nội dung dài trong Markdown
    quoteProps: 'consistent', // Đồng nhất cách dùng dấu nháy cho key của object
    requirePragma: false, // Không yêu cầu @format pragma để định dạng file
    semi: true, // Sử dụng dấu chấm phẩy ở cuối câu lệnh
    singleQuote: true, // Sử dụng dấu nháy đơn thay vì nháy kép
    tabWidth: 4, // Sử dụng 4 spaces cho mỗi mức indent để mã gọn gàng
    trailingComma: 'es5', // Chỉ thêm dấu phẩy ở cuối các phần tử ES5 (array, object)
    useTabs: false, // Không sử dụng tab, thay vào đó dùng spaces
    vueIndentScriptAndStyle: true, // Thụt lề trong các thẻ `<script>` và `<style>` của Vue
    endOfLine: 'lf', // Sử dụng ký tự xuống dòng LF (Linux/Mac) thay vì CRLF (Windows)
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 100, // Mở rộng giới hạn dòng cho file JSON để dễ đọc
                tabWidth: 4, // Dùng 4 spaces cho file JSON
            },
        },
        {
            files: '*.md',
            options: {
                proseWrap: 'preserve', // Không thay đổi định dạng văn bản trong Markdown
            },
        },
    ],
};
