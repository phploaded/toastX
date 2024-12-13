(function ($) {
    const toastX = {
        settings: {
            position: 'bottom-center',
            duration: 3000,
            animation: 'none',
            showProgress: true, // Show progress bar
            progressBarClass: '', // Optional custom CSS class for the progress bar
            progressBarColor: '#99FF00', // Default progress bar color
            onCreate: null,
            onClose: null,
            onBeforeCreate: null,
            onBeforeClose: null,
        },
        positions: [
            'top-left', 'top-center', 'top-right',
            'center-left', 'center-center', 'center-right',
            'bottom-left', 'bottom-center', 'bottom-right',
        ],
        init: function (options) {
            this.settings = $.extend(this.settings, options);
            this.createContainers();
        },
        createContainers: function () {
            if ($('.toastx-container').length) return;

            const containerHTML = this.positions
                .map(pos => `<div class="toastx-container toastx-${pos}"></div>`)
                .join('');
            $('body').append(containerHTML);
        },
        show: function (message, options = {}) {
            this.createContainers();

            const config = $.extend({}, this.settings, options);
            const positionClass = `toastx-${config.position || 'top-right'}`;
            const animationClass = `toastx-animate-${config.animation}`;
            const closeClass = `toastx-animate-${config.animation}-close`;

            if (typeof config.onBeforeCreate === 'function') {
                config.onBeforeCreate(message, config);
            }

            const $toast = $('<div class="toastx-toast"></div>')
                .addClass(`toastx-${config.type || ''}`)
                .addClass(config.additionalClass || '')
                .addClass(animationClass) // Add entrance animation class
                .attr('data-close-class', closeClass)
                .html((config.icon ? `<span class="toastx-icon toastx-icon-${config.icon}"></span>` : '') + message);

            // Adjust padding-bottom based on showProgress
            const paddingBottom = config.showProgress ? '15px' : '10px';
            $toast.css('padding-bottom', paddingBottom);

            // Add progress bar if showProgress is true
            if (config.showProgress) {
                const $progressWrapper = $('<div class="toastx-progress"></div>');
                const $progressBar = $('<div class="toastx-progress-bar"></div>')
                    .addClass(config.progressBarClass) // Add optional custom CSS class
                    .css('transition', `width ${config.duration}ms linear`) // Use CSS transition for width
                    .css('width', '100%')
                    .css('background-color', config.progressBarColor); // Set background color from progressBarColor option

                $progressWrapper.append($progressBar);
                $toast.append($progressWrapper);

                // Trigger the shrinking effect
                setTimeout(() => {
                    $progressBar.css('width', '0%');
                }, 50); // Small delay to ensure the transition works
            }

            $(`.${positionClass}`).append($toast);

            // Remove the entrance animation class after 500ms
            setTimeout(() => {
                $toast.removeClass(animationClass);
            }, 400);

            if (typeof config.onCreate === 'function') {
                config.onCreate($toast, config);
            }

            setTimeout(() => {
                if (typeof config.onBeforeClose === 'function') {
                    config.onBeforeClose($toast, config);
                }

                $toast.addClass(closeClass); // Add closing animation class

                setTimeout(() => {
                    if (typeof config.onClose === 'function') {
                        config.onClose($toast, config);
                    }

                    $toast.remove();
                }, 400); // Closing animation duration
            }, config.duration);
        },

        // Remove all toasts from all positions or from a specific position
        removeAll: function (position = null) {
            if (position) {
                const positionClass = `.toastx-${position} .toastx-toast`;
                $(positionClass).each(function () {
                    const $toast = $(this);
                    const closeClass = $toast.attr('data-close-class');
                    $toast.addClass(closeClass);

                    setTimeout(() => {
                        $toast.remove();
                    }, 400); // Closing animation duration
                });
            } else {
                $('.toastx-toast').each(function () {
                    const $toast = $(this);
                    const closeClass = $toast.attr('data-close-class');
                    $toast.addClass(closeClass);

                    setTimeout(() => {
                        $toast.remove();
                    }, 400); // Closing animation duration
                });
            }
        },
    };

    const callableToastX = function (message, options) {
        toastX.show(message, options);
    };

    $.extend(callableToastX, toastX);
    $.toastX = callableToastX;

    // Expose the removeAll function for external use
    $.toastX.removeAll = toastX.removeAll;
})(jQuery);
