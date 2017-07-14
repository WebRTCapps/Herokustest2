 $(document).ready(function() { //wait for DOM to be ready for JS execution
        easyrtc.setVideoDims(640, 480);
        easyrtc.easyApp('vcdemo', 'self', ['peer'], connectSuccess, failureCallback); //connect to easyrtc app; initiate media sources and elements
    });
