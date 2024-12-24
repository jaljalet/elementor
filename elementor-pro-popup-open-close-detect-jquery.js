jQuery(document).ready(function($) {
    // Событие при изменении состояния попапа
    $(document).on('elementor/popup/show', function(event, id) {
        console.log('Popup открыт с ID:', id);
        // Ваши действия, если попап открыт
        // Например, изменить текст элемента
        $('#your-element-id').text('Попап активен!');
    });

    $(document).on('elementor/popup/hide', function(event, id) {
        console.log('Popup закрыт с ID:', id);
        // Ваши действия, если попап закрыт
        // Например, сбросить текст элемента
        $('#your-element-id').text('Попап не активен.');
    });
});
