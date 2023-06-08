function saveWebPage() {
    // Create an S3 instance
    const s3 = new AWS.S3();
  
    // Set up the parameters for the PutObject operation
    const params = {
      Bucket: 'web-s-3', // your-bucket-name
      Key: 'webpage.html',
      Body: document.documentElement.outerHTML, //load the all content in html page
      ContentType: 'text/html'
    };
  
    // Call the PutObject operation to save the web page to S3
    s3.putObject(params, function(err, data) {
      if (err) {
        console.error('Error saving web page:', err);
      } else {
        console.log('Web page saved to S3!');
      }
    });
  }
  