import React from 'react'

export default function Fifth() {
    return (
      <div>
        <>
          {/* Modal HTML */}
          <div id="myModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  {/*                    <h5 class="modal-title">YouTube Video</h5>*/}
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    {/*                        <iframe id="cartoonVideo" class="embed-responsive-item" width="560" height="315" src="" allowfullscreen></iframe>*/}
                    <iframe
                      id="cartoonVideo"
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/Gi5A-QyY7Xk"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div id="modalOrder" className="zoom-anim-dialog white-popup">
  <div className="text-center">
    <h2>ORDER FORM</h2>
  </div>
  <div role="form" className="wpcf7" id="wpcf7-f2904-o1" lang="en-US" dir="ltr">
    <div className="screen-reader-response">
      <p role="status" aria-live="polite" aria-atomic="true" />
      <ul />
    </div>
    <form action="/#wpcf7-f2904-o1" method="post" className="wpcf7-form init" noValidate="novalidate" data-status="init">
      <div style={{display: 'none'}}>
        <input type="hidden" name="_wpcf7" defaultValue={2904} />
        <input type="hidden" name="_wpcf7_version" defaultValue="5.4.1" />
        <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
        <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f2904-o1" />
        <input type="hidden" name="_wpcf7_container_post" defaultValue={0} />
        <input type="hidden" name="_wpcf7_posted_data_hash" defaultValue />
      </div>
      <div id="success">
        <p>Your message was sent successfully!</p>
      </div>
      <div id="error">
        <p>Something went wrong, try refreshing and submitting the form again.</p>
      </div>
      <div className="form-row">
        <div className="form-row-label">Name <span className="required">*</span></div>
        <div className="form-row-group">
          <div className="form-control--50">
            <span className="wpcf7-form-control-wrap fname"><input type="text" name="fname" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="First Name" /></span>
          </div>
          <div className="form-control--50">
            <span className="wpcf7-form-control-wrap lname"><input type="text" name="lname" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Last Name" /></span>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-label">Address <span className="required">*</span></div>
        <div className="form-row-group">
          <div className="form-control--50">
            <span className="wpcf7-form-control-wrap street1"><input type="text" name="street1" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Street Address" /></span>
          </div>
          <div className="form-control--50">
            <span className="wpcf7-form-control-wrap street2"><input type="text" name="street2" defaultValue size={40} className="wpcf7-form-control wpcf7-text form-control" aria-invalid="false" placeholder="Street Address Line 2" /></span>
          </div>
        </div>
        <div className="form-row-group">
          <div className="form-control--30">
            <span className="wpcf7-form-control-wrap postal"><input type="text" name="postal" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Postal / Zip Code" /></span>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-label">Phone Number <span className="required">*</span></div>
        <div className="form-row-group">
          <div className="form-control--50">
            <span className="wpcf7-form-control-wrap phone"><input type="text" name="phone" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Phone Number" /></span>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-label">E-mail <span className="required">*</span></div>
        <div className="form-row-group">
          <span className="wpcf7-form-control-wrap email"><input type="email" name="email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control form-control--50" aria-required="true" aria-invalid="false" placeholder="Email" /></span>
        </div>
        <div className="form-row-group">
          <span className="wpcf7-form-control-wrap optiondoorman"><select name="optiondoorman" className="wpcf7-form-control wpcf7-select form-control form-control--50" aria-invalid="false"><option value="The laundry will be with doorman">The laundry will be with doorman</option><option value="The laundry will not be with doorman">The laundry will not be with doorman</option></select></span>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-group--date">
          <div className="form-row-label">Pick-Up Date</div>
          <div className="form-row-group">
            <div className="datetimepicker-wrap">
              <span className="wpcf7-form-control-wrap pickupdate"><input type="text" name="pickupdate" defaultValue size={40} className="wpcf7-form-control wpcf7-text form-control datetimepicker" aria-invalid="false" /></span>
            </div>
          </div>
        </div>
        <div className="form-row-group--time">
          <div className="form-row-label">Pick Up Time</div>
          <div className="form-row-group">
            <div className="timepicker-wrap">
              <span className="wpcf7-form-control-wrap pickuptime"><input type="text" name="pickuptime" defaultValue size={40} className="wpcf7-form-control wpcf7-text form-control timepicker" aria-invalid="false" /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-group--date">
          <div className="form-row-label">Delivery Date</div>
          <div className="form-row-group">
            <div className="datetimepicker-wrap">
              <span className="wpcf7-form-control-wrap deliverydate"><input type="text" name="deliverydate" defaultValue size={40} className="wpcf7-form-control wpcf7-text form-control datetimepicker" aria-invalid="false" /></span>
            </div>
          </div>
        </div>
        <div className="form-row-group--time">
          <div className="form-row-label">Delivery Time</div>
          <div className="form-row-group">
            <div className="timepicker-wrap">
              <span className="wpcf7-form-control-wrap deliverytime"><input type="text" name="deliverytime" defaultValue size={40} className="wpcf7-form-control wpcf7-text form-control timepicker" aria-invalid="false" /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-row-label--lg">Preferred Laundry Detergent</div>
        <div className="form-row-group form-new">
          <div className="clearfix">
            <span className="wpcf7-form-control-wrap Preferred"><span className="wpcf7-form-control wpcf7-radio radio"><span className="wpcf7-list-item first"><input type="radio" name="Preferred" defaultValue="Tide" /><span className="wpcf7-list-item-label">Tide</span></span>
                <span className="wpcf7-list-item"><input type="radio" name="Preferred" defaultValue="Gain" /><span className="wpcf7-list-item-label">Gain</span></span><span className="wpcf7-list-item"><input type="radio" name="Preferred" defaultValue="All Free & Clear" /><span className="wpcf7-list-item-label">All Free &amp; Clear</span></span>
                <span className="wpcf7-list-item last"><input type="radio" name="Preferred" defaultValue="I Will Provide" /><span className="wpcf7-list-item-label">I Will Provide</span></span>
              </span>
            </span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-label--lg">Bleach Whites</div>
          <div className="form-row-group">
            <div className="clearfix">
              <span className="wpcf7-form-control-wrap Bleach"><span className="wpcf7-form-control wpcf7-radio radio"><span className="wpcf7-list-item first"><input type="radio" name="Bleach" defaultValue="Yes" /><span className="wpcf7-list-item-label">Yes</span></span>
                  <span className="wpcf7-list-item last"><input type="radio" name="Bleach" defaultValue="No" /><span className="wpcf7-list-item-label">No</span></span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-label--lg">Laundry Bag Needed?</div>
          <div className="form-row-group">
            <div className="clearfix">
              <span className="wpcf7-form-control-wrap Laundry"><span className="wpcf7-form-control wpcf7-radio radio"><span className="wpcf7-list-item first"><input type="radio" name="Laundry" defaultValue="Yes" /><span className="wpcf7-list-item-label">Yes</span></span>
                  <span className="wpcf7-list-item last"><input type="radio" name="Laundry" defaultValue="No" /><span className="wpcf7-list-item-label">No</span></span>
                </span>
              </span>
            </div>
            <div className="clearfix">
              <span className="wpcf7-form-control-wrap itemlimits"><span className="wpcf7-form-control wpcf7-checkbox"><span className="wpcf7-list-item first last"><input type="checkbox" name="itemlimits[]" defaultValue="Line Dry Items Included (Limit 5 Items)" /><span className="wpcf7-list-item-label">Line Dry Items Included (Limit 5 Items)</span></span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-label">Special Instructions <span className="required">*</span></div>
          <div className="form-row-group">
            <span className="wpcf7-form-control-wrap special"><input type="text" name="special" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Example: Wash whites with hot water" /></span>
          </div>
        </div>
        <div className="text-center">
          <input type="submit" defaultValue="SUBMIT ORDER" className="wpcf7-form-control wpcf7-submit btn btn-default top" />
        </div>
        <div className="wpcf7-response-output" aria-hidden="true" />
      </div></form>
  </div>
</div>
</>
      </div>
    );
}
