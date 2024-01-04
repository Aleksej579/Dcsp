<?php /* 
  <pre style="bodrer: 1px solid green; background: #DDD">
  HEADERS:
  <?php print_r(getallheaders()); ?>
   <?php print $platon__header; ?>
  COOKIE:
  <?php print_r($_COOKIE); ?>
  </pre>
  */
  ?>
<?php if (!(isset($_GET['mv']) || dcsp_check_mobileapp())) : ?>
  <?php print $platon__header; ?>
  <?php print $platon__site_content; ?>
  <?php print $platon__footer; ?>
<?php else : ?>
  <div id="site-content-mv">
     
    <div class="row">
      <div id="second-sidebar">
          <?php if (!empty($messages)): ?>
            <div id="messages">
              <?php print render($messages); ?>
            </div>
          <?php endif; ?>
          <div class="flex-wrapper">
            
            <div id="content">
              <?php print render($page['content']); ?>
              <?php print render($page['content_bottom']); ?>
            </div>

            <?php
              if (isset($group_state)&& !empty($group_state)) {
                print render($group_state);
              }
            ?>

            <?php if ($action_links&&isset($node)): ?>
              <ul class="action-links">
                <?php print render($action_links); ?>
              </ul>
            <?php endif; ?>
          </div>
        </div>
      </div>
   </div>
<?php endif; ?>
