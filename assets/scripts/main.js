$(document).ready(function() {

    // Smooth scrolling to anchor links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    });

    // Close mobile menu when a link is clicked
    $('.sm-nav-link').click(() => {
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
    });
    $('#logo').click(() => {
        $('#mobile-menu-dropdown').addClass('hidden');
        $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
    });



    // Waypoints for the project sections

    $('#site-banner').waypoint(function() {
        $('.lg-nav-link').removeClass('active-lg-nav-link');
        $('.lg-nav-link').addClass('inactive-lg-nav-link');
        $('.sm-nav-link').removeClass('active-sm-nav-link');
        $('.sm-nav-link').addClass('inactive-sm-nav-link');
    }, { offset: '-50%'}
    );





    $('#project-section-main').waypoint(function() {
        changeActiveNavLink('project');
    }, { offset: '120px'}
    );


    $('#datasets-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('datasets');
        }
    }, { offset: '120px'}
    );

    $('#datasets-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('project');
        }
    }, { offset: '100%'}
    );



    $('#visualisations-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('visualisations');
        }
    }, { offset: '120px'}
    );
    $('#visualisations-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('datasets');
        }
    }, { offset: '100%'}
    );


    $('#license-metadata-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('license-metadata');
        }        
    }, { offset: '120px'}
    );
    $('#license-metadata-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('visualisations');
        }
    }, { offset: '100%'}
    );


    $('#about-section-main').waypoint(function(direction) {
        if (direction == 'down') {
            changeActiveNavLink('about');
        }
    }, { offset: '120px'}
    );
    $('#about-section-main').waypoint(function(direction) {
        if (direction == 'up') {
            changeActiveNavLink('license-metadata');
        }
    }, { offset: '100%'}
    );



    
    // Change the svg icon of the mobile menu button when clicked
    $('#mobile-menu-btn').click(() => {
        if ($('#mobile-menu-dropdown').hasClass('hidden')) {
            $('#mobile-menu-dropdown').removeClass('hidden');
            $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>');
        } else {
            $('#mobile-menu-dropdown').addClass('hidden');
            $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
        };
    });

    // Activations of the toggle sections
    // ANALYSES
    $('#quality-btn').click(function() {
        activateAnalysisSection('quality');
    });

    $('#legal-btn').click(function() {
        activateAnalysisSection('legal');
    });

    $('#ethical-btn').click(function() {
        activateAnalysisSection('ethical');
    });

    $('#technical-btn').click(function() {
        activateAnalysisSection('technical');
    });

    // DATASETS
    $('#sd1-toggle-btn').click(function() {
        openDatasetDescription('sd1');
    });

    $('#sd2-toggle-btn').click(function() {
        openDatasetDescription('sd2');
    });

    $('#sd3-toggle-btn').click(function() {
        openDatasetDescription('sd3');
    });

    $('#sd4-toggle-btn').click(function() {
        openDatasetDescription('sd4');
    });

    $('#sd5-toggle-btn').click(function() {
        openDatasetDescription('sd5');
    });

    $('#sd6-toggle-btn').click(function() {
        openDatasetDescription('sd6');
    });

    $('#mud1-toggle-btn').click(function() {
        openDatasetDescription('mud1');
    });

    $('#mud2-toggle-btn').click(function() {
        openDatasetDescription('mud2');
    });

    $('#mud3-toggle-btn').click(function() {
        openDatasetDescription('mud3');
    });

    $('#mud4-toggle-btn').click(function() {
        openDatasetDescription('mud4');
    });

    $('#mud5-toggle-btn').click(function() {
        openDatasetDescription('mud5');
    });


    // TABLES
    $('#privacy-issues-toggle-btn').click(function() {
        openTable('privacy-issues');
    });

    $('#datasets-ipr-toggle-btn').click(function() {
        openTable('datasets-ipr');
    });

    $('#lpa-toggle-btn').click(function() {
        openTable('lpa');
    });

    $('#licenses-toggle-btn').click(function() {
        openTable('licenses');
    });

    $('#economical-conditions-toggle-btn').click(function() {
        openTable('economical-conditions');
    });

    $('#temporary-aspects-toggle-btn').click(function() {
        openTable('temporary-aspects');
    });

    // METADATA
    $('#catalogue-metadata-toggle-btn').click(function() {
        openMetadata('catalogue-metadata');
    });

    $('#mud1-metadata-toggle-btn').click(function() {
        openMetadata('mud1-metadata');
    });

    $('#mud2-metadata-toggle-btn').click(function() {
        openMetadata('mud2-metadata');
    });

    $('#mud3-metadata-toggle-btn').click(function() {
        openMetadata('mud3-metadata');
    });

    $('#mud4-metadata-toggle-btn').click(function() {
        openMetadata('mud4-metadata');
    });

    $('#mud5-metadata-toggle-btn').click(function() {
        openMetadata('mud5-metadata');
    });


});



function activateAnalysisSection(section) {
    $('.analysis-container').addClass('hidden');
    $('#' + section + '-analysis').removeClass('hidden');

    $('.analysis-h3').removeClass('active-analysis');
    $('.analysis-spin').addClass('hidden');
    $('#' + section + '-h3').addClass('active-analysis');
    $('#' + section + '-spin').removeClass('hidden');
};


function openDatasetDescription(dataset) {
    if ($('#' + dataset + '-toggle-container').hasClass('hidden')) {
        $('.dd-toggle-container').addClass('hidden');
        $('.dd-activation-icon').html('+');
        $('#' + dataset + '-toggle-container').removeClass('hidden');
        $('#' + dataset + '-activation-icon').html('–')
    } else {
        $('#' + dataset + '-toggle-container').addClass('hidden');
        $('#' + dataset + '-activation-icon').html('+')
    };
};


function openTable(table) {
    if ($('#' + table + '-toggle-container').hasClass('hidden')) {
        $('.tab-toggle-container').addClass('hidden');
        $('.tab-activation-icon').html('+');
        $('#' + table + '-toggle-container').removeClass('hidden');
        $('#' + table + '-activation-icon').html('–')
    } else {
        $('#' + table + '-toggle-container').addClass('hidden');
        $('#' + table + '-activation-icon').html('+')
    };
};

function openMetadata(metaTable) {
    if ($('#' + metaTable + '-toggle-container').hasClass('hidden')) {
        $('.meta-toggle-container').addClass('hidden');
        $('.meta-activation-icon').html('+');
        $('#' + metaTable + '-toggle-container').removeClass('hidden');
        $('#' + metaTable + '-activation-icon').html('–')
    } else {
        $('#' + metaTable + '-toggle-container').addClass('hidden');
        $('#' + metaTable + '-activation-icon').html('+')
    };
};



function changeActiveNavLink(navLink) {
    $('.lg-nav-link').removeClass('active-lg-nav-link');
    $('.lg-nav-link').addClass('inactive-lg-nav-link');
    $('#' + navLink + '-lg-nav-link').removeClass('inactive-lg-nav-link');
    $('#' + navLink + '-lg-nav-link').addClass('active-lg-nav-link');

    $('.sm-nav-link').removeClass('active-sm-nav-link');
    $('.sm-nav-link').addClass('inactive-sm-nav-link');
    $('#' + navLink + '-sm-nav-link').removeClass('inactive-sm-nav-link');
    $('#' + navLink + '-sm-nav-link').addClass('active-sm-nav-link');
}